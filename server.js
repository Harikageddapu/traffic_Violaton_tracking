const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'harika',
    database: 'mydb'
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected ✅");
    }
});

// GET Drivers
app.get('/drivers', (req, res) => {
    db.query("SELECT * FROM Driver", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// ADD Driver
app.post('/addDriver', (req, res) => {
    const { Driver_ID, Name, License_Number, Phone_Number, Address, DOB } = req.body;

    db.query(
        "INSERT INTO Driver (Driver_ID, Name, License_Number, Phone_Number, Address, DOB) VALUES (?, ?, ?, ?, ?, ?)",
        [Driver_ID, Name, License_Number, Phone_Number, Address, DOB],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.send("Driver Added ✅");
        }
    );
}); // ✅ CLOSED PROPERLY

// UPDATE Payment Status
app.put('/updatePayment/:id', (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    db.query(
        "UPDATE Payment SET Payment_Status=? WHERE Payment_ID=?",
        [status, id],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Updated ✅");
        }
    );
});

// VEHICLES
app.get('/vehicles', (req, res) => {
    db.query("SELECT * FROM Vehicle", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// POLICE
app.get('/police', (req, res) => {
    db.query("SELECT * FROM Traffic_Police", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// VIOLATION
app.get('/violations', (req, res) => {
    db.query("SELECT * FROM Violation", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// PAYMENT
app.get('/payments', (req, res) => {
    db.query("SELECT * FROM Payment", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});
app.put('/updateDriver/:id', (req, res) => {
    const id = req.params.id;
    const { Name } = req.body;

    db.query(
        "UPDATE Driver SET Name=? WHERE Driver_ID=?",
        [Name, id],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Driver Updated ✅");
        }
    );
});
// DELETE DRIVER
app.delete('/deleteDriver/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM Driver WHERE Driver_ID=?",
        [id],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Driver Deleted ✅");
        }
    );
});
// DRIVER FULL DETAILS (JOIN)
app.get('/driverDetails/:id', (req, res) => {
    const id = req.params.id;

    const sql = `
    SELECT d.Driver_ID, d.Name, d.Phone_Number,
           v.Vehicle_ID, v.Vehicle_Number,
           vi.Violation_Type, vi.Fine_Amount,
           p.Payment_Status
    FROM Driver d
    LEFT JOIN Vehicle v ON d.Driver_ID = v.Driver_ID
    LEFT JOIN Violation vi ON v.Vehicle_ID = vi.Vehicle_ID
    LEFT JOIN Payment p ON vi.Violation_ID = p.Violation_ID
    WHERE d.Driver_ID = ?
    `;

    db.query(sql, [id], (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});