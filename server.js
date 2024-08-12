const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts'); 
const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views")); // Ensure this path is correct
app.set("layout", "layout/layout"); // Use layout name without extension
app.set("view engine", "ejs");

// Routes
app.get('/', (req, res) => {
    res.redirect('/index');
});

app.get('/index', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact Us' });
});

app.get('/recipes', (req, res) => {
    res.render('recipes', { pageTitle: 'Recipes' });
});

app.post('/submit-contact', (req, res) => {
    const { name, message } = req.body;
    const formData = { name, message };
    res.render('form-submission', { pageTitle: 'Form Submission', formData });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`500 - ${err.message}`);
});

app.use((req, res, next) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
