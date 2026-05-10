# 🚦 Traffic Violation & Fine Management System

A full-stack web application developed as a **DBMS Mini Project** for managing traffic violations, vehicle records, officers, and fine payments efficiently.

The system provides an interactive dashboard where administrators can record violations, monitor pending fines, update payment statuses, and manage all traffic-related data in real time.

---

# 📖 Project Overview

The **Traffic Violation & Fine Management System** is designed to simplify the process of handling traffic rule violations digitally.

This system helps:
- Record traffic violations
- Manage vehicle and driver information
- Track fine payments
- Store officer details
- Update records instantly using inline editing
- Generate live dashboard statistics

The project uses:
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express.js
- **Database:** MySQL

---

# ✨ Features

## 🔐 Admin Authentication
- Secure admin login system
- Session-based access control

## 🚗 Vehicle Management
- Add and manage vehicle details
- Store vehicle registration information

## 👮 Officer Management
- Maintain traffic officer records
- Assign violations to officers

## ⚠️ Violation Management
- Record traffic violations
- Add violation type and fine amount
- Update violation status instantly

## 💰 Fine Tracking
- Track paid and pending fines
- Monitor total collected fines

## 📊 Interactive Dashboard
- Real-time statistics display
- Total violations
- Pending fines
- Paid fines
- Total fine collection amount

## ✏️ Inline Editing
- Update table records directly from dashboard
- Changes automatically saved to MySQL database

---

# 🛠️ Tech Stack

| Layer       | Technology Used |
|-------------|----------------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | Node.js, Express.js |
| Database    | MySQL |
| Runtime     | Node.js |
| Tools Used  | VS Code, Git, GitHub |

---

# 📂 Project Structure

```bash
traffic_Violaton_tracking/
│
├── index.html              # Frontend main page
├── server.js               # Express backend server
├── package.json            # Project dependencies
├── package-lock.json
├── README.md
├── .gitignore
│
├── database/
│   └── schema.sql          # MySQL database schema
│
├── css/
│   └── style.css           # Styling files
│
├── js/
│   └── script.js           # Frontend JavaScript
│
└── assets/
    └── images/             # Images and icons
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/traffic_Violaton_tracking.git
cd traffic_Violaton_tracking
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure MySQL Database

1. Open MySQL Workbench or XAMPP/phpMyAdmin
2. Create a database:

```sql
CREATE DATABASE traffic_management;
```

3. Import the SQL schema file:

```bash
database/schema.sql
```

---

## 4️⃣ Configure Backend

Open:

```bash
server.js
```

Update your MySQL credentials:

```javascript
password: "your_mysql_password"
```

---

## 5️⃣ Run the Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:3000
```

---

# 🔑 Default Admin Credentials

| Username | Password |
|----------|----------|
| admin    | admin123 |

---

# 📸 Modules Included

- Admin Login
- Dashboard
- Vehicle Records
- Officer Records
- Violation Tracking
- Fine Management
- Payment Status Updates

---

# 🎯 Objectives of the Project

- Digitize traffic violation management
- Reduce manual paperwork
- Improve record maintenance
- Enable faster fine tracking
- Provide centralized data management

---

# 🚀 Future Enhancements

- Online payment gateway integration
- Email/SMS notifications
- Role-based authentication
- Report generation
- Data analytics dashboard
- Mobile responsive interface

---

# 👨‍💻 Developed By

**Harika Geddapu**

DBMS Mini Project

---

# 📜 License

This project is developed for educational and academic purposes.

