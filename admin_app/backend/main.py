from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func
from pydantic import BaseModel
import models, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3002", "http://127.0.0.1:3002"],  # Admin React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AdminLogin(BaseModel):
    username: str
    password: str

# Simple hardcoded admin credentials
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin"

def authenticate_admin(username: str, password: str):
    return username == ADMIN_USERNAME and password == ADMIN_PASSWORD

@app.post("/admin/login")
def admin_login(credentials: AdminLogin):
    if not authenticate_admin(credentials.username, credentials.password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"message": "Login successful"}

@app.get("/admin/users")
def get_all_users(db: Session = Depends(database.get_db)):
    users = db.query(models.User).all()
    user_data = []
    for user in users:
        expense_count = db.query(func.count(models.Transaction.id)).filter(
            models.Transaction.user_id == user.id,
            models.Transaction.type == 'expense'
        ).scalar()
        user_data.append({
            "id": user.id,
            "email": user.email,
            "hashed_password": user.hashed_password,
            "last_ip": user.last_ip,
            "expense_count": expense_count,
            "is_active": user.is_active
        })
    return user_data
