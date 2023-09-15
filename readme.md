Simple CRUD API

This is a simple CRUD API that provides basic functionality for creating, reading, updating, and deleting data. It is built using Node.js: https://nodejs.org/en and Express: https://expressjs.com/, and uses an in-memory database for storing data.

Features

Supports all four CRUD operations:
Create
Read
Update
Delete
Uses JSON for data serialization and deserialization
Supports cross-origin resource sharing (CORS)
How to use

Install the dependencies:
npm install
Start the server:
npm start
The server will start listening on port 3000.

API documentation

The following API endpoints are supported:

GET /: Returns a list of all items in the database.
GET /:id: Returns the item with the specified ID.
POST /: Creates a new item in the database.
PUT /:id: Updates the item with the specified ID.
DELETE /:id: Deletes the item with the specified ID.
Example requests

# Get all items
GET http://localhost:3000/

# Get the item with the ID 1
GET http://localhost:3000/1

# Create a new item
POST http://localhost:3000/
{
  "name": "John Doe"
}

# Update the item with the ID 1
PUT http://localhost:3000/1
{
  "name": "Jane Doe"
}

# Delete the item with the ID 1
DELETE http://localhost:3000/1