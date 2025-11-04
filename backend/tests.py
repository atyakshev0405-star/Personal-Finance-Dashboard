import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import app
import models, database

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

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
