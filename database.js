const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database with error handling
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the SQLite database:', err.message);
        process.exit(1); // Exit the application if the database connection fails
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`
            CREATE TABLE  recipes (
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
db.run ('CREATE TABLE Publisher (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, image TEXT published_year INTEGER)')

// Export the database connection to use it elsewhere in your application
module.exports = db;

// Close the database connection only when the Node.js process is ending
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing the database connection:', err.message);
        } else {
            console.log('Closed the database connection.');
        }
        process.exit(0); // Exit the process
    });
});
