<div align="center">

<img src="personal_finance_dashboard_logo.png" alt="Personal Finance Dashboard Logo" width="200"/>

# 💰 Personal Finance Dashboard

### Comprehensive Personal Finance Management Application

[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

---

### ⭐ If you like this project, give it a star!

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Docker Support](#-docker-support)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Personal Finance Dashboard** is a modern, full-stack web application designed to help you take control of your finances. Built with cutting-edge technologies, it provides an intuitive interface for tracking income and expenses, visualizing financial data, and making informed financial decisions.

### 🎯 Why Choose Personal Finance Dashboard?

- 🔐 **Secure Authentication** - JWT-based authentication system
- 📊 **Beautiful Visualizations** - Interactive charts and graphs with vibrant gradients
- 💾 **Data Management** - Easy CSV import/export functionality
- 🎯 **Smart Forecasting** - AI-powered spending predictions
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🚀 **High Performance** - Built with FastAPI and React
- 🎨 **Modern UI** - Glassmorphism design with smooth animations
- 🌈 **Vibrant Colors** - Eye-catching neon effects and gradients

---

## ✨ Features

### 🔑 User Authentication
- ✅ Secure user registration and login
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Session management
- ✅ Protected routes and API endpoints

### 💸 Transaction Management
- ✅ Add income and expense transactions
- ✅ Edit and delete transactions
- ✅ Filter by date, category, and type
- ✅ Real-time balance calculation
- ✅ Color-coded transaction types
- ✅ Transaction history with pagination

### 🏷️ Category Organization
- ✅ Create custom categories
- ✅ Organize transactions efficiently
- ✅ Color-coded category system
- ✅ Category-based analytics
- ✅ Visual category badges

### 📈 Data Visualization
- 📊 **Income vs Expenses Chart** - Track your financial flow
- 🥧 **Category Breakdown** - See where your money goes
- 📉 **Trend Analysis** - Identify spending patterns
- 🎨 **Interactive Graphs** - Powered by Chart.js with vibrant colors
- 🌈 **Animated Charts** - Smooth transitions and hover effects

### 🔮 Financial Forecasting
- 📈 Simple Moving Average (SMA) predictions
- 💡 Future spending estimates
- 📋 Budget planning assistance
- 🎯 Trend-based insights
- 📊 Visual forecast representations

### 📁 CSV Import/Export
- 📥 Bulk import transactions from CSV files
- 📤 Export data for backup or analysis
- 📊 Compatible with Excel and Google Sheets
- 📋 Standardized CSV format
- ✅ Data validation on import

### 🎨 Modern UI/UX
- ✨ Glassmorphism design aesthetic
- 🌈 Vibrant gradients and neon effects
- 💫 Smooth animations and transitions
- 📱 Responsive layout for all screen sizes
- 🎭 Interactive elements with hover effects
- 🌙 Dark mode support (coming soon)
- ⚡ Fast and fluid user experience

---

## 🎬 Demo

### 📸 Screenshots

<div align="center">

#### 🔐 Login Page
![Login Page](screenshots/login.jpg)
*Elegant login interface with premium gradient border and glassmorphism*

#### 📝 Registration
![Registration](screenshots/register.jpg)
*Beautiful registration form with modern design*

#### 🏠 Main Dashboard
![Main Dashboard](screenshots/main%20page.jpg)
*Comprehensive dashboard with vibrant statistics and smooth animations*

</div>

### 🚀 Live Demo
🌐 [Try it live](#) *(Coming soon)*

---

## 🛠️ Tech Stack

### Backend
| Technology | Description | Version |
|------------|-------------|---------|
| ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) | High-performance web framework | Latest |
| ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat-square&logo=sqlalchemy&logoColor=white) | SQL toolkit and ORM | Latest |
| ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat-square&logo=sqlite&logoColor=white) | Lightweight database | Latest |
| ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white) | Data validation | Latest |
| ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) | Data manipulation | Latest |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON%20web%20tokens&logoColor=white) | Authentication | Latest |

### Frontend
| Technology | Description | Version |
|------------|-------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI library | 18.x |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | Client-side routing | Latest |
| ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white) | Data visualization | Latest |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | HTTP client | Latest |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Styling with Glassmorphism | Latest |

### DevOps
| Technology | Description | Version |
|------------|-------------|---------|
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | Containerization | Latest |
| ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white) | Multi-container orchestration | Latest |

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **Node.js 14+** - [Download](https://nodejs.org/)
- **npm or yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional) - [Download](https://www.docker.com/)

### Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/atyakshev0405-star/Personal-Finance-Dashboard.git
cd Personal-Finance-Dashboard
```

#### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

📚 **API Documentation**: `http://localhost:8000/docs`

#### 3️⃣ Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

---

## 🚀 Usage

### Getting Started

1. **Register an Account**
   - Navigate to `http://localhost:3000`
   - Click "Register" and create your account
   - Fill in your email and password

2. **Login**
   - Use your credentials to log in
   - You'll be redirected to the dashboard

3. **Add Your First Transaction**
   - Click "Add Income" or "Add Expense"
   - Fill in the amount, description, and category
   - Submit the form

4. **Create Categories**
   - Navigate to the Categories tab
   - Add custom categories for better organization
   - Assign colors to categories

5. **View Analytics**
   - Check the Charts tab for visualizations
   - Analyze your spending patterns
   - View income vs expense trends

6. **Import/Export Data**
   - Use CSV import for bulk transactions
   - Export your data for backup or analysis

### CSV Format

For importing transactions, use this CSV format:

```csv
amount,description,type,category_id
100.50,Salary,income,1
-25.00,Groceries,expense,2
-50.00,Utilities,expense,3
```

**Column Descriptions:**
- `amount`: Numeric value (positive for income, negative for expense)
- `description`: Text description of the transaction
- `type`: Either 'income' or 'expense'
- `category_id`: Numeric ID of the category

---

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Login
```http
POST /token
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}
```

### Transaction Endpoints

#### Get All Transactions
```http
GET /transactions
Authorization: Bearer {token}
```

#### Create Transaction
```http
POST /transactions
Authorization: Bearer {token}
Content-Type: application/json

{
  "amount": 100.50,
  "description": "Salary",
  "type": "income",
  "category_id": 1
}
```

#### Update Transaction
```http
PUT /transactions/{transaction_id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "amount": 150.00,
  "description": "Updated Salary",
  "type": "income",
  "category_id": 1
}
```

#### Delete Transaction
```http
DELETE /transactions/{transaction_id}
Authorization: Bearer {token}
```

### Category Endpoints

#### Get All Categories
```http
GET /categories
Authorization: Bearer {token}
```

#### Create Category
```http
POST /categories
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Groceries"
}
```

### Data Management Endpoints

#### Import CSV
```http
POST /import-csv
Authorization: Bearer {token}
Content-Type: multipart/form-data

file: transactions.csv
```

#### Export CSV
```http
GET /export-csv
Authorization: Bearer {token}
```

#### Get Forecast
```http
GET /forecast
Authorization: Bearer {token}
```

**Full API Documentation**: Visit `http://localhost:8000/docs` when the backend is running.

---

## 📁 Project Structure

```
Personal-Finance-Dashboard/
├── 📂 backend/
│   ├── 📄 main.py              # FastAPI application entry point
│   ├── 📄 models.py            # SQLAlchemy database models
│   ├── 📄 auth.py              # Authentication logic
│   ├── 📄 database.py          # Database configuration
│   ├── 📄 config.py            # Application settings
│   ├── 📄 business_logic.py    # Business logic functions
│   ├── 📄 tests.py             # API tests
│   └── 📄 requirements.txt     # Python dependencies
│
├── 📂 frontend/
│   ├── 📂 public/
│   │   ├── 📄 index.html       # HTML template
│   │   └── 📄 favicon.ico      # App icon
│   │
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📄 Dashboard.js         # Main dashboard
│   │   │   ├── 📄 Dashboard.css        # Dashboard styles
│   │   │   ├── 📄 Login.js             # Login component
│   │   │   ├── 📄 Register.js          # Registration component
│   │   │   ├── 📄 Auth.css             # Auth styles
│   │   │   ├── 📄 TransactionForm.js   # Transaction form
│   │   │   ├── 📄 TransactionList.js   # Transaction list
│   │   │   ├── 📄 CategoryForm.js      # Category form
│   │   │   ├── 📄 CategoryList.js      # Category list
│   │   │   ├── 📄 Charts.js            # Data visualization
│   │   │   ├── 📄 Charts.css           # Chart styles
│   │   │   ├── 📄 Forecast.js          # Forecasting component
│   │   │   ├── 📄 Forecast.css         # Forecast styles
│   │   │   ├── 📄 CSVImportExport.js   # CSV functionality
│   │   │   ├── 📄 CSVImportExport.css  # CSV styles
│   │   │   ├── 📄 Form.css             # Form styles
│   │   │   └── 📄 List.css             # List styles
│   │   │
│   │   ├── 📄 App.js           # Main React component
│   │   ├── 📄 App.css          # App styles
│   │   ├── 📄 index.js         # React entry point
│   │   └── 📄 index.css        # Global styles
│   │
│   └── 📄 package.json         # Node dependencies
│
├── 📂 admin_app/               # Admin panel (optional)
│   ├── 📂 backend/
│   └── 📂 frontend/
│
├── 📄 docker-compose.yml       # Docker Compose configuration
├── 📄 Dockerfile               # Docker image definition
├── 📄 .gitignore               # Git ignore rules
├── 📄 TODO.md                  # Project tasks
└── 📄 README.md                # This file
```

---

## ⚙️ Configuration

### Backend Configuration

Edit `backend/config.py` to customize settings:

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database
    database_url: str = "sqlite:///./finance.db"
    # For PostgreSQL:
    # database_url: str = "postgresql://user:password@localhost/finance_db"
    
    # JWT Settings
    secret_key: str = "your-secret-key-here"  # Change in production!
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # CORS
    cors_origins: list = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"

settings = Settings()
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=sqlite:///./finance.db
SECRET_KEY=your-super-secret-key-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Frontend Configuration

The frontend automatically connects to `http://localhost:8000`. To change this, edit the API base URL in your components.

---

## 🧪 Testing

### Backend Tests

Run the test suite:

```bash
cd backend
python -m pytest tests.py -v
```

Run with coverage:

```bash
pytest tests.py --cov=. --cov-report=html
```

### Frontend Tests

```bash
cd frontend
npm test
```

Run all tests:

```bash
npm test -- --coverage
```

---

## 🐳 Docker Support

### Using Docker Compose (Recommended)

The easiest way to run the entire application:

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

### Manual Docker Build

#### Backend
```bash
cd backend
docker build -t finance-backend .
docker run -p 8000:8000 finance-backend
```

#### Frontend
```bash
cd frontend
docker build -t finance-frontend .
docker run -p 3000:3000 finance-frontend
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/atyakshev0405-star/Personal-Finance-Dashboard.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

### Code Style Guidelines

- **Python**: Follow PEP 8
- **JavaScript**: Use ESLint configuration
- **Commits**: Use conventional commit messages
- **CSS**: Follow BEM methodology

### Reporting Bugs

Found a bug? Please open an issue with:
- Bug description
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Environment details

---

## 🗺️ Roadmap

### Version 1.0 (Current) ✅
- ✅ User authentication
- ✅ Transaction management
- ✅ Category organization
- ✅ Data visualization
- ✅ CSV import/export
- ✅ Basic forecasting
- ✅ Vibrant UI with glassmorphism

### Version 1.1 (In Progress) 🔄
- 🔄 Dark mode support
- 🔄 Multi-currency support
- 🔄 Recurring transactions
- 🔄 Budget planning
- 🔄 Email notifications
- 🔄 Export to PDF
- 🔄 Advanced filtering

### Version 2.0 (Planned) 📋
- 📋 Mobile app (React Native)
- 📋 Advanced analytics dashboard
- 📋 Bill reminders
- 📋 Investment tracking
- 📋 Multi-user support
- 📋 Bank account integration
- 📋 Receipt scanning (OCR)
- 📋 Tax report generation

### Future Enhancements 💡
- 💡 AI-powered insights
- 💡 Voice commands
- 💡 Cryptocurrency tracking
- 💡 Social features
- 💡 Financial goals tracking
- 💡 Savings recommendations
- 💡 Expense predictions
- 💡 Multi-language support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Personal Finance Dashboard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### Project Maintainer

**Portfolio**: [https://atyakshev0405-star.github.io/Portfolio-site/](https://atyakshev0405-star.github.io/Portfolio-site/)

### Links
- **Project Repository**: [GitHub](https://github.com/atyakshev0405-star/Personal-Finance-Dashboard)
- **Issue Tracker**: [GitHub Issues](https://github.com/atyakshev0405-star/Personal-Finance-Dashboard/issues)
- **Documentation**: [Wiki](https://github.com/atyakshev0405-star/Personal-Finance-Dashboard/wiki)

---

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) - Amazing web framework
- [React](https://reactjs.org/) - Powerful UI library
- [Chart.js](https://www.chartjs.org/) - Beautiful charts
- [SQLAlchemy](https://www.sqlalchemy.org/) - Excellent ORM
- All our [contributors](https://github.com/atyakshev0405-star/Personal-Finance-Dashboard/graphs/contributors)



<div align="center">

### Made with ❤️ and ☕ by developers, for developers

**[⬆ Back to Top](#-personal-finance-dashboard)**

---

**Last Updated**: November 9, 2025

</div>
