# PurePlates

![screenshot](https://github.com/Lolis007/PurePlates/blob/main/Screenshot%202024-08-14%20002941.png?raw=true)

A simple web application to manage and share recipes. Users can create, view, edit, and delete recipes. The app also supports image uploads for each recipe.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [Rationale Behind the Database Schema](#rationale-behind-the-database-schema)



## Features
- **CRUD Operations:** Create, Read, Update, and Delete recipes.
- **Image Upload:** Upload images for each recipe.
- **Responsive Design:** The app is responsive and works well on various screen sizes.
- **Error Handling:** Comprehensive error handling for database operations and form submissions.

## Technologies Used
- **Node.js:** JavaScript runtime for the server-side.
- **Express.js:** Web framework for building the server.
- **SQLite3:** Lightweight SQL database for storing recipes.
- **EJS:** Templating engine for rendering dynamic HTML pages.
- **Multer:** Middleware for handling file uploads.
- **Body-parser:** Middleware to parse incoming request bodies.
- **Cors:** Middleware for enabling CORS.
- **HTML5/CSS3:** Front-end technologies for styling and layout.

## Installation
Before you begin, ensure you have Node.js and npm installed on your machine.
1. **Clone the repository:**
2. cd pure plates
3. Run `npm install` then `npm run dev` in VS code terminal to run the server at port 3000.

##Setup
1. Create the Database
The application uses SQLite3 as its database. Upon the first run, the application will automatically create the necessary database and tables if they don't exist.

Alternatively, you can manually create the database:

Create the SQLite database:

The database file database.db will be automatically created in the root directory when you first run the application.

Ensure the database tables are created:

The tables (recipes and publisher) will be created automatically when the application starts if they don't already exist.

2. Configure the Environment (Optional)
If you want to change the default port or other settings, you can create a .env file in the root directory and specify your environment variables:   
PORT=3000

##Database Schema
#Recipes Table
The recipes table is designed to store information about each recipe in the application. It includes the following fields:

-`id`: An auto-incrementing integer that uniquely identifies each recipe.
-`title`: A text field that stores the title of the recipe. This field is required.
-`ingredients`: A text field that stores the list of ingredients needed for the recipe.
-`instructions`: A text field that stores step-by-step instructions for preparing the recipe.
-`publisher_id`: An integer that references the id of a publisher in the publisher table, establishing a relationship between the recipe and its publisher.
-`image`: A text field that stores the path to the image file associated with the recipe.
#Publisher Table
-The publisher table is designed to store information about publishers who provide recipes. It includes the following fields:
-`id`: An auto-incrementing integer that uniquely identifies each publisher.
-`publisher_name`: A text field that stores the name of the publisher. This field is required.
-`publisher_city`: A text field that stores the city where the publisher is located.

##Rationale Behind the Database Schema
1. Separation of Concerns:
The schema separates the recipes and publisher entities into two tables. This normalization helps avoid redundancy and maintain data integrity. For instance, a publisher can be associated with multiple recipes, making it easier to update publisher information in one place without affecting the recipes.

2. Foreign Key Relationships:
The publisher_id in the recipes table is a foreign key that references the id column in the publisher table. This relationship enforces referential integrity, ensuring that each recipe is linked to a valid publisher.

3. Auto-Incrementing Primary Keys:
Both tables use auto-incrementing primary keys (id) to provide each record with a unique identifier automatically. This makes it easier to manage records and establish relationships between them.

4. Flexibility in Data Storage:
The ingredients and instructions fields in the recipes table are stored as text to allow for detailed descriptions. The image field stores the file path of the uploaded recipe image, providing flexibility in how media is handled.

5. Scalability:
This schema is designed to be easily extendable. Additional fields can be added to the recipes or publisher tables, or new tables can be created to accommodate more complex relationships without major modifications to the existing structure.

