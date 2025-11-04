# Personal Finance Dashboard

A comprehensive personal finance management application with user authentication, transaction tracking, categorization, data visualization, and CSV import/export functionality.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Transaction Management**: Add, view, and manage income/expense transactions
- **Categories**: Organize transactions with custom categories
- **Data Visualization**: Interactive charts showing income vs expenses and category breakdowns
- **Financial Forecasting**: Simple moving average predictions for future spending
- **CSV Import/Export**: Bulk import transactions from CSV files and export data
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Backend
- **FastAPI**: High-performance web framework for building APIs
- **SQLAlchemy**: ORM for database operations
- **SQLite**: Database (easily configurable to PostgreSQL)
- **JWT**: Token-based authentication
- **Pydantic**: Data validation
- **Pandas**: CSV processing

### Frontend
- **React**: User interface framework
- **Axios**: HTTP client for API calls
- **Chart.js**: Data visualization library
- **React Router**: Client-side routing

## Installation and Setup

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /token` - User login

### Transactions
- `GET /transactions` - Get user's transactions
- `POST /transactions` - Create new transaction

### Categories
- `GET /categories` - Get user's categories
- `POST /categories` - Create new category

### Data Management
- `POST /import-csv` - Import transactions from CSV
- `GET /export-csv` - Export transactions to CSV
- `GET /forecast` - Get financial forecast

## Testing

Run backend tests:
```bash
cd backend
python -m pytest tests.py -v
```

## CSV Format

For importing transactions, your CSV file should have these columns:
- `amount`: Numeric value (e.g., 100.50)
- `description`: Text description
- `type`: 'income' or 'expense'
- `category_id`: Numeric category ID

## Configuration

### Database
By default, the application uses SQLite. To use PostgreSQL, update `config.py`:

```python
database_url: str = "postgresql://user:password@localhost/finance_db"
```

### JWT Settings
Configure JWT in `config.py`:
```python
secret_key: str = "your-secret-key"
algorithm: str = "HS256"
access_token_expire_minutes: int = 30
```

## Project Structure

```
├── backend/
│   ├── main.py          # FastAPI application
│   ├── models.py        # SQLAlchemy models
│   ├── auth.py          # Authentication functions
│   ├── database.py      # Database configuration
│   ├── config.py        # Application settings
│   ├── tests.py         # API tests
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React app
│   │   ├── components/         # React components
│   │   └── ...
│   └── package.json            # Node dependencies
└── README.md                   # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the MIT License.
