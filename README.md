### Backend for YouTube Comments Fetcher

This is the backend part of the YouTube Comments Fetcher application built using Express.js and MongoDB. The backend is responsible for handling requests related to storing and retrieving YouTube video comments from a database.

### Tech Stack

- Node.js: JavaScript runtime environment for building server-side applications.
- Express.js: Web framework for building RESTful APIs.
- MongoDB: NoSQL database used to store the comments fetched from YouTube.
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- CORS: Middleware to enable cross-origin requests.
- dotenv: Loads environment variables from a .env file.

### Features

- Store YouTube comments: Fetch comments from YouTube and store them in the database.
- Check recent comments: Fetch comments from the database and check if they are up to date.
- Handle requests from frontend: Serve endpoints that the frontend can call to retrieve or post comments.

### Start the server

```bash
nodemon app / node app

```
