
const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database with error handling
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the SQLite database:', err.message);
        process.exit(1); // Exit the application if the database connection fails
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`
            CREATE TABLE IF NOT EXISTS recipes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                image TEXT
            )
        `, (err) => {
            if (err) {
                console.error('Error creating recipes table:', err.message);
                process.exit(1); // Exit the application if the table creation fails
            }
        });
    }
});

module.exports = db;
