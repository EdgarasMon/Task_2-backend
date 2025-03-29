import express from "express";
import comments from "./routes/comments.js";
import startServer from "./utils/startServer.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Task2";

app.use(cors());
app.use(express.json());
app.use("/comments", comments);

startServer(app, PORT, MONGO_URI);
