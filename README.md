# 🚀 BackendProject

A backend application built using **Node.js, Express.js, and MongoDB** to understand and implement real-world backend development concepts.

This project focuses on building a **modular REST API**, user authentication, database management, file uploads, and cloud-based media storage.

---

## 📌 Project Overview

**BackendProject** is a backend development project designed with a scalable and modular architecture.

The project follows a clean separation of:

* Routes
* Controllers
* Models
* Middlewares
* Database configuration
* Utility functions

It uses **MongoDB** for data storage and **Mongoose** for database interaction.

The project also integrates **Cloudinary** for cloud-based media storage and **Multer** for handling file uploads.

---

## ✨ Features

* 🔹 RESTful API development with Express.js
* 🔹 MongoDB database integration
* 🔹 Mongoose ODM
* 🔹 User registration and management
* 🔹 User and video data models
* 🔹 JWT authentication setup
* 🔹 Access and refresh token configuration
* 🔹 Secure password hashing with bcrypt
* 🔹 Cookie handling
* 🔹 File upload handling with Multer
* 🔹 Cloudinary integration for media storage
* 🔹 CORS configuration
* 🔹 Environment variable management using dotenv
* 🔹 Modular project architecture
* 🔹 MongoDB aggregation and pagination support
* 🔹 Development using Nodemon
* 🔹 Code formatting using Prettier

---

## 🛠️ Tech Stack

### Backend

| Technology     | Purpose               |
| -------------- | --------------------- |
| **Node.js**    | JavaScript runtime    |
| **Express.js** | Backend web framework |
| **MongoDB**    | NoSQL database        |
| **Mongoose**   | MongoDB ODM           |

### Authentication & Security

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| **JWT**           | Authentication and token management |
| **bcrypt**        | Password hashing                    |
| **cookie-parser** | Handling cookies                    |
| **CORS**          | Cross-origin request handling       |

### File & Cloud Storage

| Technology     | Purpose                                       |
| -------------- | --------------------------------------------- |
| **Multer**     | Handling multipart/form-data and file uploads |
| **Cloudinary** | Cloud-based image/video storage               |

### Development Tools

| Tool         | Purpose                                     |
| ------------ | ------------------------------------------- |
| **Nodemon**  | Automatic server restart during development |
| **Prettier** | Code formatting                             |
| **Git**      | Version control                             |
| **GitHub**   | Repository hosting                          |

---

## 📂 Project Structure

```text
BackendProject/
│
├── public/
│   └── temp/
│
├── src/
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── db/
│   │   └── ...
│   │
│   ├── middlewares/
│   │   └── ...
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── video.model.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── utils/
│   │   └── ...
│   │
│   ├── app.js
│   ├── constants.js
│   └── index.js
│
├── .env.sample
├── .gitignore
├── package.json
├── package-lock.json
├── prettierignore
├── prettierrc
└── test-connect.js
```

---

## 🏗️ Architecture

The application follows a modular backend architecture:

```text
                    Client
                      │
                      ▼
                  API Request
                      │
                      ▼
                    Routes
                      │
                      ▼
                  Middleware
                      │
                      ▼
                  Controller
                      │
                      ▼
                    Model
                      │
                      ▼
                   MongoDB
```

This structure keeps different responsibilities separated and makes the application easier to maintain and scale.

---

## 🔐 Authentication

The project is being developed with **JSON Web Token (JWT)** based authentication.

The authentication setup includes:

* Access tokens
* Refresh tokens
* Password hashing with bcrypt
* Cookies
* JWT secrets
* Token expiration

### Authentication Flow

```text
User
 │
 ▼
Register / Login
 │
 ▼
Validate Credentials
 │
 ▼
Hash / Verify Password
 │
 ▼
Generate JWT
 │
 ├── Access Token
 │
 └── Refresh Token
 │
 ▼
Authenticated Requests
```

Passwords are securely hashed using **bcrypt** instead of storing plain-text passwords.

---

## 👤 User Management

The backend contains a dedicated user model and user routes.

User-related functionality is organized using:

```text
routes
   ↓
controllers
   ↓
models
   ↓
MongoDB
```

This keeps API routing separate from business logic and database operations.

---

## 🎥 Video Management

The project includes a **Video model** for managing video-related information.

The backend is designed to support video-related functionality such as:

* Video information storage
* Media uploads
* Cloud-based media storage
* User association with uploaded content

Cloudinary is used for storing uploaded media.

---

## ☁️ Cloudinary Integration

The project uses **Cloudinary** for cloud-based media storage.

Instead of keeping uploaded media permanently on the local server, files can be uploaded to Cloudinary.

### Upload Flow

```text
Client
  │
  ▼
File Upload
  │
  ▼
Multer
  │
  ▼
Temporary Storage
  │
  ▼
Cloudinary
  │
  ▼
Cloud Media URL
  │
  ▼
MongoDB
```

This approach makes the application more suitable for handling media files.

---

## 📤 File Uploads

**Multer** is used to process file uploads.

It handles `multipart/form-data` requests and temporarily stores uploaded files before they are processed further.

The uploaded files can then be sent to Cloudinary for permanent cloud storage.

---

## 🗄️ Database

The project uses **MongoDB** as the primary database.

**Mongoose** is used as the ODM to:

* Define schemas
* Create models
* Validate data
* Communicate with MongoDB
* Perform database queries

### Database Flow

```text
Express Application
        │
        ▼
     Mongoose
        │
        ▼
     MongoDB
```

---

## 📄 Pagination

The project includes:

**mongoose-aggregate-paginate-v2**

This package can be used to efficiently paginate MongoDB aggregation results when working with larger datasets.

---

## 🌐 API Structure

The project follows a REST API structure.

The API is organized into separate route modules.

For example:

```text
/api/v1/users
```

User routes are handled separately from the main application configuration.

This makes it easier to add additional modules in the future, such as:

```text
/api/v1/users
/api/v1/videos
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory.

You can use `.env.sample` as a reference.

Example:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/priyankayadav131017/BackendProject.git
```

### 2. Navigate to the Project

```bash
cd BackendProject
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file:

```bash
touch .env
```

Then add the required environment variables.

### 5. Start the Development Server

```bash
npm run dev
```

The application will start using **Nodemon**.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server using Nodemon.

## 🧪 Testing Database Connection

The repository also contains:

```text
test-connect.js
```

This file can be used to test the MongoDB connection independently during development.

---

## 🔄 Development Workflow

The typical development flow for this project is:

```text
Create Route
     ↓
Create Controller
     ↓
Create / Update Model
     ↓
Connect Database
     ↓
Add Middleware
     ↓
Test API
     ↓
Handle Errors
     ↓
Push Changes to GitHub
```

---

## 🔒 Security Practices

The project follows several basic backend security practices:

* Passwords are hashed using bcrypt.
* Sensitive configuration is stored using environment variables.
* Secret keys are not stored directly in source code.
* `.env` is excluded using `.gitignore`.
* JWT is used for authentication.
* CORS is configured for API access.

---

## 👩‍💻 Author

### Priyanka Yadav


GitHub: **[@priyankayadav131017](https://github.com/priyankayadav131017)**

---




This project is actively being developed as part of my backend development learning journey. The architecture and features will continue to evolve as new backend concepts and functionalities are implemented.
