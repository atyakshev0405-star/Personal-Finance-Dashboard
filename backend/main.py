from fastapi import FastAPI, Depends, HTTPException, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import pandas as pd
from io import StringIO
import models, database, auth
from database import engine
from pydantic import BaseModel

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserCreate(BaseModel):
    email: str
    password: str

class TransactionCreate(BaseModel):
    amount: float
    description: str
    type: str
    category_id: int

class CategoryCreate(BaseModel):
    name: str

@app.post("/register")
def register(user: UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User created"}

@app.post("/token")
def login(user: UserCreate, request: Request, db: Session = Depends(database.get_db)):
    user_auth = auth.authenticate_user(db, user.email, user.password)
    if not user_auth:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    # Update last IP
    user_auth.last_ip = request.client.host
    db.commit()
    access_token = auth.create_access_token(data={"sub": user_auth.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/transactions")
def get_transactions(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    return db.query(models.Transaction).filter(models.Transaction.user_id == current_user.id).all()

@app.post("/transactions")
def create_transaction(transaction: TransactionCreate, current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    db_transaction = models.Transaction(**transaction.dict(), user_id=current_user.id)
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

@app.get("/categories")
def get_categories(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    return db.query(models.Category).filter(models.Category.user_id == current_user.id).all()

@app.post("/categories")
def create_category(category: CategoryCreate, current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    db_category = models.Category(**category.dict(), user_id=current_user.id)
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

@app.post("/import-csv")
def import_csv(file: UploadFile = File(...), current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    contents = file.file.read().decode('utf-8')
    df = pd.read_csv(StringIO(contents))
    for _, row in df.iterrows():
        transaction = models.Transaction(
            amount=row['amount'],
            description=row['description'],
            type=row['type'],
            category_id=row['category_id'],
            user_id=current_user.id
        )
        db.add(transaction)
    db.commit()
    return {"message": "CSV imported"}

@app.get("/export-csv")
def export_csv(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    transactions = db.query(models.Transaction).filter(models.Transaction.user_id == current_user.id).all()
    df = pd.DataFrame([{
        'amount': t.amount,
        'description': t.description,
        'type': t.type,
        'category_id': t.category_id,
        'date': t.date
    } for t in transactions])
    csv = df.to_csv(index=False)
    return {"csv": csv}

@app.get("/forecast")
def get_forecast(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    # Simple moving average forecast
    transactions = db.query(models.Transaction).filter(models.Transaction.user_id == current_user.id).order_by(models.Transaction.date).all()
    amounts = [t.amount for t in transactions]
    if len(amounts) < 3:
        return {"forecast": "Not enough data"}
    forecast = sum(amounts[-3:]) / 3
    return {"forecast": forecast}
