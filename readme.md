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

Data is fed via postman using body json not query parameters

How to use

Install the dependencies:
npm install


Start the server:
npm start


The server will start listening on port 3000.

API documentation

The following API endpoints are supported:

GET /: Returns a list of all items in the database.
GET /:id: Returns the item with the specified ID generated by the database.
POST /: Creates a new item in the database.
PUT /:id: Updates the item with the specified ID generated by the database.
DELETE /:id: Deletes the item with the specified ID generated by the database.
Example requests

# Get all items
GET http://localhost:8080/

# Get the item with the ID generated by the database
GET http://localhost:3000/api/user/:id

# Create a new item
POST http://localhost:3000/api/user
{
  "name": "John Doe",
  "email": "mentor@HNGx.com",
  "id": 1
}

# Update the item with the ID generated by the database
PUT http://localhost:3000/api/user/:id
{
  "name": "Jane Doe"
}

# Delete the item with the ID generated by the database
DELETE http://localhost:3000/api/user/:id
