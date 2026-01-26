# Field Service Management Backend

A backend service for a Field Service Management system built using **Node.js**, **TypeScript**, **Express**, and **MongoDB Atlas**.  
This project provides a scalable and structured backend setup with TypeScript support and MongoDB cloud integration.

---

## 🚀 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **ts-node-dev**
- **dotenv**

---

## 📁 Project Structure

```
field-service-management/
├── src/
│ ├── config/
│ │ └── db.ts # MongoDB connection logic
│ |── controllers/  # Route handlers
│ |── middleware/ # middlewares
│ |── models/ # schema information
│ ├── routes/ # Express routes
│ └── server.ts # Entry point of the application
│ └── app.ts # Express app configuration
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Features
- TypeScript backend
- MongoDB Atlas integration
- Modular structure
- JWT Authentication (planned)


## API Endpoints

### Auth
- `POST /api/auth/login` - login user
- `POST /api/auth/register` - register user

### Service
- `GET /api/service/create` - can be accessed by admin and provider only
- `GET /api/service/accept` - can be accessed by provider only
- `GET /api/service/book` - can be accessed by user only


## Environment Variables
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=jwt_secret_key
PORT=port_number
```

## Resources
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Express Docs](https://expressjs.com/)