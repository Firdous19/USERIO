# Userio Web App

Welcome to UserIO, a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide users with a seamless experience for signing up and logging in.

## Features

- **User Registration**: Users can easily sign up for an account by providing necessary details.
- **User Login**: Registered users can securely log in to their accounts.
- **User Authentication**: Ensures the security and integrity of user accounts.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MongoDB
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Firdous19/USERIO.git
   ```

2. Navigate to the project directory:

   ```bash
   cd userio
   ```

3. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

   ```bash
   cd backend
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and configure the following environment variables:

   ```
   PORT=5000
   MONGO_DB_URL="mongodb+srv://Firdous:WwTYkle3Zqtg5HyV@cluster1.vuafqov.mongodb.net/MERN"
   JWT_SECRET=your_secret_key
   ```

2. Replace `your_secret_key` with a secure key for JWT token generation.

## Running the App

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:

   ```bash
   cd frontend
   npm run dev
   ```

The app should now be running at `http://localhost:5173`.

## Usage

1. Open your web browser and navigate to `http://localhost:5173`.
2. Sign up for a new account or log in if you already have an account.
3. Explore the features and functionalities of UserIO.

---

Thank you for using UserIO! We hope you find it useful and enjoy using our web application.
