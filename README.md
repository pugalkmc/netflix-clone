# Netflix Clone
This is a full-stack Netflix clone application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse movies, view details, and manage their profile.

## Demo
The application is deployed and can be accessed at: [https://nutplix.vercel.app/](https://nutplix.vercel.app/)

## Repository
The source code is available on GitHub: [Netflix Clone](https://github.com/pugalkmc/netflix-clone.git)

## Features
- User authentication (register, login, logout)
- View list of movies
- View movie details
- User profile management

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Security:** Helmet, express-rate-limit, express-mongo-sanitize, xss-clean, hpp

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (version 12 or higher)
- MongoDB installed and running

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/pugalkmc/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies for both client and server:**
   ```bash
   # Navigate to the client directory and install dependencies
   cd client
   npm install

   # Navigate to the server directory and install dependencies
   cd ../server
   npm install
   ```

## Running the Application
1. **Start the client:**
   ```bash
   cd client
   npm start
   ```

   The client will run on `http://localhost:3000`.

2. **Start the server:**
   ```bash
   cd server
   npm run dev
   ```

   The server will run on `http://localhost:3001`.

## Environment Variables
You need to set up the following environment variables for both the client and server. Create a `.env` file in `server` directorie with the following contents:

### Server
Create a `.env` file in the `server` directory:

```
PORT=3001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

Replace `your_mongo_connection_string` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.
