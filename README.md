# traffic_Violaton_tracking
A web-Based Traffic Violation &amp; Fine Management System built as a DBMS Mini Project using MySQL,Node.js,and HTML?CSS?JS.It allows admins to record traffic violations,manage fines,track vehicles and officers,and update records in real time through an interactive dashboard.
# 🚦 Traffic Violation & Fine Management System

A DBMS Mini Project built with **MySQL**, **Node.js (Express)**, and **HTML/CSS/JS**.

## 📌 Features
- Admin Login with authentication
- Track Traffic Violations with fine amounts
- Manage Vehicles, Officers & Violation Types
- Inline table editing — updates saved directly to MySQL
- Dashboard with live stats (Total, Pending, Paid, Fine Amount)

## 🛠️ Tech Stack
| Layer    | Technology        |
|----------|-------------------|
| Frontend | HTML, CSS, JS     |
| Backend  | Node.js + Express |
| Database | MySQL             |

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/traffic-violation-system.git
cd traffic-violation-system
```

### 2. Setup MySQL
- Open MySQL and run the file: `database/schema.sql`

### 3. Configure Backend
- Open `backend/server.js`
- Change `password: 'your_mysql_password'` to your MySQL password

### 4. Install & Run
```bash
cd backend
npm install
node server.js
```

### 5. Open Frontend
- Open `frontend/index.html` in browser
- OR visit `http://localhost:3000`

## 🔑 Login Credentials
| Username | Password  |
|----------|-----------|
| admin    | admin123  |

## 📂 Project Structure
```
traffic-violation-system/
├── backend/        → Node.js server
├── frontend/       → HTML UI
├── database/       → MySQL schema
└── README.md
```
