# Project 8 - Modular Express.js Application

A simple modular Express.js application demonstrating the separation of concerns with routes, controllers, middleware, and models.

## Features

- Modular architecture with separate folders for routes, controllers, middleware, and models
- Basic routing for login and home pages
- Middleware for request logging
- Controller-based request handling

## Project Structure

```
Modular-Express-App/
├── app.js              # Main Express application setup
├── server.js           # Server startup file
├── controller/         # Request handlers
│   └── indexController.js
├── middleware/         # Custom middleware
│   └── indexMiddleware.js
├── models/             # Data models (empty for now)
└── routes/             # Route definitions
    ├── indexRoute.js
    └── loginRoute.js
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd NodeExpress/Practice/Project-8-modular
   ```

2. Install dependencies:
   ```bash
   npm install express
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your browser and visit:
   - Home page: `http://localhost:3000/`
   - Login page: `http://localhost:3000/login`

## API Endpoints

- `GET /` - Home page
- `GET /login` - Login page

## Technologies Used

- Node.js
- Express.js

## License

This project is for educational purposes.