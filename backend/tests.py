import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from unittest.mock import MagicMock
import models, database, business_logic
import pandas as pd

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# Override settings for testing
import config
config.settings.database_url = SQLALCHEMY_DATABASE_URL

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

models.Base.metadata.drop_all(bind=engine)
models.Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

# Import app after overriding config
from main import app
app.dependency_overrides[database.get_db] = override_get_db

client = TestClient(app)

def test_register():
    response = client.post("/register", json={"email": "test@example.com", "password": "password"})
    assert response.status_code == 200
    assert response.json() == {"message": "User created"}

def test_login():
    response = client.post("/token", json={"email": "test@example.com", "password": "password"})
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_create_transaction():
    # First login to get token
    login_response = client.post("/token", json={"email": "test@example.com", "password": "password"})
    token = login_response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create a category first
    category_response = client.post("/categories", json={"name": "Food"}, headers=headers)
    category_id = category_response.json()["id"]

    # Create transaction
    response = client.post("/transactions", json={
        "amount": 100.0,
        "description": "Lunch",
        "type": "expense",
        "category_id": category_id
    }, headers=headers)
    assert response.status_code == 200
    assert response.json()["amount"] == 100.0

# Unit tests for business logic functions

def test_validate_transaction_valid():
    db = MagicMock()
    category = MagicMock()
    db.query.return_value.filter.return_value.first.return_value = category
    # Should not raise
    business_logic.validate_transaction(100.0, "income", 1, db)

def test_validate_transaction_invalid_amount():
    db = MagicMock()
    with pytest.raises(ValueError, match="Amount must be positive"):
        business_logic.validate_transaction(-10.0, "income", 1, db)

def test_validate_transaction_invalid_type():
    db = MagicMock()
    with pytest.raises(ValueError, match="Type must be 'income' or 'expense'"):
        business_logic.validate_transaction(100.0, "invalid", 1, db)

def test_validate_transaction_invalid_category():
    db = MagicMock()
    db.query.return_value.filter.return_value.first.return_value = None
    with pytest.raises(ValueError, match="Category does not exist"):
        business_logic.validate_transaction(100.0, "income", 999, db)

def test_calculate_balance():
    transactions = [
        MagicMock(amount=100.0, type="income"),
        MagicMock(amount=50.0, type="expense"),
        MagicMock(amount=200.0, type="income"),
    ]
    balance = business_logic.calculate_balance(transactions)
    assert balance == 250.0  # 100 + 200 - 50

def test_process_csv_export():
    transactions = [
        MagicMock(amount=100.0, description="Test", type="income", category_id=1, date="2023-01-01"),
        MagicMock(amount=50.0, description="Another", type="expense", category_id=1, date="2023-01-02"),
    ]
    csv = business_logic.process_csv_export(transactions)
    assert "amount,description,type,category_id,date" in csv
    assert "100.0,Test,income,1,2023-01-01" in csv
    assert "50.0,Another,expense,1,2023-01-02" in csv

def test_process_csv_import():
    df = pd.DataFrame({
        'amount': [100.0, 50.0],
        'description': ['Test', 'Another'],
        'type': ['income', 'expense'],
        'category_id': [1, 1]
    })
    db = MagicMock()
    category = MagicMock()
    db.query.return_value.filter.return_value.first.return_value = category
    business_logic.process_csv_import(df, 1, db)
    assert db.add.call_count == 2
    db.commit.assert_called_once()
