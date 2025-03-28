import express from "express";
import Comment from "../models/comment.js";

const router = express.Router();

router.post("/comment", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating comment" });
  }
});

router.get("/comment", async (req, res) => {
  const comments = await Comments.find();
  res.json(comments);
});

export default router;
