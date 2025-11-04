import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import Charts from './Charts';
import Forecast from './Forecast';
import CSVImportExport from './CSVImportExport';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [quickAddType, setQuickAddType] = useState('');
  const [quickAddData, setQuickAddData] = useState({
    amount: '',
    description: '',
    category_id: ''
  });
  const [quickAddLoading, setQuickAddLoading] = useState(false);
  const [quickAddError, setQuickAddError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [transactionsRes, categoriesRes] = await Promise.all([
        axios.get('/transactions'),
        axios.get('/categories')
      ]);
      setTransactions(transactionsRes.data);
      setCategories(categoriesRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTransactionAdded = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleCategoryAdded = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleQuickAdd = (type) => {
    setQuickAddType(type);
    setShowQuickAdd(true);
    setQuickAddData({
      amount: '',
      description: '',
      category_id: ''
    });
    setQuickAddError('');
  };

  const handleQuickAddChange = (e) => {
    setQuickAddData({
      ...quickAddData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuickAddSubmit = async (e) => {
    e.preventDefault();
    setQuickAddLoading(true);
    setQuickAddError('');

    try {
      const response = await axios.post('/transactions', {
        ...quickAddData,
        amount: parseFloat(quickAddData.amount),
        category_id: parseInt(quickAddData.category_id),
        type: quickAddType
      });
      handleTransactionAdded(response.data);
      setShowQuickAdd(false);
      setQuickAddData({
        amount: '',
        description: '',
        category_id: ''
      });
    } catch (err) {
      setQuickAddError('Failed to add transaction');
    } finally {
      setQuickAddLoading(false);
    }
  };

  const cancelQuickAdd = () => {
    setShowQuickAdd(false);
    setQuickAddData({
      amount: '',
      description: '',
      category_id: ''
    });
    setQuickAddError('');
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <div className="animated-background">
        <div className="floating-balls">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="ball ball-3"></div>
          <div className="ball ball-4"></div>
          <div className="ball ball-5"></div>
          <div className="ball ball-6"></div>
        </div>
      </div>
      <header className="dashboard-header">
        <h1>Personal Finance Dashboard</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>

      <nav className="dashboard-nav">
        <button
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'transactions' ? 'active' : ''}
          onClick={() => setActiveTab('transactions')}
        >
          Transactions
        </button>
        <button
          className={activeTab === 'categories' ? 'active' : ''}
          onClick={() => setActiveTab('categories')}
        >
          Categories
        </button>
        <button
          className={activeTab === 'charts' ? 'active' : ''}
          onClick={() => setActiveTab('charts')}
        >
          Charts
        </button>
        <button
          className={activeTab === 'forecast' ? 'active' : ''}
          onClick={() => setActiveTab('forecast')}
        >
          Forecast
        </button>
        <button
          className={activeTab === 'import-export' ? 'active' : ''}
          onClick={() => setActiveTab('import-export')}
        >
          Import/Export
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview">
            <div className="quick-add-buttons">
              <button onClick={() => handleQuickAdd('income')} className="quick-add-btn income-btn">
                + Add Income
              </button>
              <button onClick={() => handleQuickAdd('expense')} className="quick-add-btn expense-btn">
                + Add Expense
              </button>
            </div>

            {showQuickAdd && (
              <div className="quick-add-form">
                <h3>Add {quickAddType === 'income' ? 'Income' : 'Expense'}</h3>
                <form onSubmit={handleQuickAddSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Amount:</label>
                      <input
                        type="number"
                        name="amount"
                        value={quickAddData.amount}
                        onChange={handleQuickAddChange}
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Category:</label>
                      <select
                        name="category_id"
                        value={quickAddData.category_id}
                        onChange={handleQuickAddChange}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input
                      type="text"
                      name="description"
                      value={quickAddData.description}
                      onChange={handleQuickAddChange}
                      required
                    />
                  </div>
                  {quickAddError && <div className="error">{quickAddError}</div>}
                  <div className="form-actions">
                    <button type="submit" disabled={quickAddLoading}>
                      {quickAddLoading ? 'Adding...' : 'Add'}
                    </button>
                    <button type="button" onClick={cancelQuickAdd} className="cancel-btn">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Transactions</h3>
                <p>{transactions.length}</p>
              </div>
              <div className="stat-card">
                <h3>Total Income</h3>
                <p>${transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</p>
              </div>
              <div className="stat-card">
                <h3>Total Expenses</h3>
                <p>${transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</p>
              </div>
              <div className="stat-card">
                <h3>Categories</h3>
                <p>{categories.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div>
            <TransactionForm categories={categories} onTransactionAdded={handleTransactionAdded} />
            <TransactionList transactions={transactions} categories={categories} onUpdate={loadData} />
          </div>
        )}

        {activeTab === 'categories' && (
          <div>
            <CategoryForm onCategoryAdded={handleCategoryAdded} />
            <CategoryList categories={categories} onUpdate={loadData} />
          </div>
        )}

        {activeTab === 'charts' && (
          <Charts transactions={transactions} categories={categories} />
        )}

        {activeTab === 'forecast' && (
          <Forecast />
        )}

        {activeTab === 'import-export' && (
          <CSVImportExport onDataImported={loadData} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
