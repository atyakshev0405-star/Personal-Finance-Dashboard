import React from 'react';
import axios from 'axios';
import './List.css';

function TransactionList({ transactions, categories, onUpdate }) {
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleDelete = async (transactionId) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await axios.delete(`/transactions/${transactionId}`);
        onUpdate();
      } catch (error) {
        console.error('Error deleting transaction:', error);
        alert('Failed to delete transaction');
      }
    }
  };

  return (
    <div className="list-container">
      <h3>Transactions</h3>
      {transactions.length === 0 ? (
        <p className="empty-message">No transactions yet. Add your first transaction above!</p>
      ) : (
        <div className="list">
          {transactions.map(transaction => (
            <div key={transaction.id} className="list-item">
              <div className="item-info">
                <div className="item-header">
                  <span className="description">{transaction.description}</span>
                  <span className={`amount ${transaction.type}`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </span>
                </div>
                <div className="item-details">
                  <span className="category">{getCategoryName(transaction.category_id)}</span>
                  <span className={`type ${transaction.type}`}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                  <span className="date">{formatDate(transaction.date)}</span>
                  <div className="item-actions">
                    <button className="edit-btn" onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
