
# User Registration Project

This project is a simple user registration form built with **Node.js**, **Express.js**, **SQLite**, and **HTML/CSS** for the frontend. It stores the user information (name and address) in a database and uses an API to handle form submissions.

## Project Structure

![image](https://github.com/user-attachments/assets/2110018f-a666-4548-bac0-ec89067ad39e)


## Features

- **User Registration Form**: Collects the user name and address.
- **API Integration**: Sends the form data to the backend for storage in an SQLite database.
- **Form Validation**: Basic input validation on the frontend to ensure required fields are filled.
- **Responsive Design**: Styled with CSS for a professional and responsive look.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Node.js installation guide](https://nodejs.org/en/)
- **npm**: Installed automatically with Node.js
- **SQLite3**: [SQLite installation guide](https://www.sqlite.org/download.html)

## Backend Setup

1. Navigate to the `backend/` directory.
   ```bash
   cd backend
2. Install the required dependencies:
      npm install
3. Start the backend server:
   node app.js
The backend server will start on http://localhost:3000.

Frontend Setup
1. Open the frontend/index.html file in a browser.
2. Fill in the user registration form and click "Register".
3. The form will send a POST request to the backend API to store the user information in the SQLite database.
## API Endpoints
POST /api/register
  1. Registers a new user and stores their name and address in the database.
  2. Request body example
{
  "name": "John Doe",
  "address": "123 Main St"
}

## Database Setup (SQLite)
The project uses SQLite as the database. The models are defined in the backend/models/ directory. When the backend starts, it will automatically create the necessary tables (User and Address).

## You can check the database by opening the SQLite file (database.sqlite) in the backend/ directory:
sqlite3 database.sqlite

## Run queries like:
SELECT * FROM User;
SELECT * FROM Address;

