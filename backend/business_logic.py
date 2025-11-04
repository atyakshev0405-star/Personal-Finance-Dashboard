from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
import pandas as pd
from io import StringIO
from typing import List
import models

def validate_transaction(amount: float, type: str, category_id: int, db: Session) -> None:
    """
    Validates transaction data.
    Raises ValueError if invalid.
    """
    if amount <= 0:
        raise ValueError("Amount must be positive")
    if type not in ['income', 'expense']:
        raise ValueError("Type must be 'income' or 'expense'")
    category = db.query(models.Category).filter(models.Category.id == category_id).first()
    if not category:
        raise ValueError("Category does not exist")

def calculate_balance(transactions: List[models.Transaction]) -> float:
    """
    Calculates the total balance from a list of transactions.
    Income adds to balance, expenses subtract.
    """
    balance = 0.0
    for transaction in transactions:
        if transaction.type == 'income':
            balance += transaction.amount
        elif transaction.type == 'expense':
            balance -= transaction.amount
    return balance

def process_csv_import(df: pd.DataFrame, user_id: int, db: Session) -> None:
    """
    Processes a DataFrame from CSV and adds transactions to the database.
    Assumes df has columns: amount, description, type, category_id
    """
    for _, row in df.iterrows():
        validate_transaction(row['amount'], row['type'], row['category_id'], db)
        transaction = models.Transaction(
            amount=row['amount'],
            description=row['description'],
            type=row['type'],
            category_id=row['category_id'],
            user_id=user_id
        )
        db.add(transaction)
    db.commit()

def process_csv_export(transactions: List[models.Transaction]) -> str:
    """
    Converts a list of transactions to a CSV string.
    """
    df = pd.DataFrame([{
        'amount': t.amount,
        'description': t.description,
        'type': t.type,
        'category_id': t.category_id,
        'date': t.date
    } for t in transactions])
    csv = df.to_csv(index=False)
    return csv
