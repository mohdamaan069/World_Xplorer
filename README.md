# World Xplorer App

## Overview

World Xplorer is a MERN stack web application that allows users to share places (with images and locations) with other users. It implements all CRUD operations, multiple data models, image uploads using Multer, and input validation. Authentication and authorization are managed using bcrypt and JWT. The application uses MongoDB as the database and Mongoose for connecting to it. Google Maps API is used to display maps, and Google Geocoding API is used to get coordinates from addresses. The project follows the MVC model and is structured into frontend (React.js) and backend (Express.js, Mongoose) folders.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, read, update, and delete places
- Image upload for places
- Input validation
- Display places on Google Maps
- Get coordinates from addresses using Google Geocoding API

## Technologies

- **Frontend**: React.js
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Authentication**: bcrypt, JWT
- **File Upload**: Multer
- **Maps and Geocoding**: Google Maps API, LocationIQ API

## Installation

### Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/mohdamaan069/World_Xplorer.git
cd World-Xplorer
```

### Backend Setup

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add your configuration:

    ```plaintext
    DB_NAME=
    USER_NAME=
    USER_PASSWORD=

    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` folder:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add your configuration:

    ```plaintext
    REACT_APP_BACKEND_LINK=http://localhost:5000
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user account.
3. Log in with your account.
4. Share a new place by providing details and uploading an image.
5. View the shared places on the map.

   **Live Link:** [Click here to visit!](https://xplorer-kappa.vercel.app/)

## File Structure

```plaintext
world-xplorer-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
|   ├── util/
│   ├── .env
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

### Backend

- `controllers/`: Contains the controller logic for handling requests.
- `middleware/`: Contains the middleware functions for authentication, error handling, etc.
- `models/`: Contains the Mongoose schemas and models.
- `routes/`: Contains the route definitions.
- `uploads/`: Directory for storing uploaded images.
- `app.js`: Initializes the Express application.
- `server.js`: Starts the server.

### Frontend

- `public/`: Contains the public assets.
- `src/`: Contains the React components, pages, services, and utilities.
- `.env`: Environment variables for frontend configuration.

## API Endpoints

### Auth Routes

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/login`: Log in a user

### Place Routes

- `GET /api/places`: Get all places
- `GET /api/places/:id`: Get a specific place
- `POST /api/places`: Create a new place
- `PUT /api/places/:id`: Update a place
- `DELETE /api/places/:id`: Delete a place

### User Routes

- `GET /api/users/:id`: Get user details

## Contributing

We welcome contributions to improve this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

We hope you enjoy using World Xplorer! If you have any questions or feedback, please feel free to open an issue or contact us.
