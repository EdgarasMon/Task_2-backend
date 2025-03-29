import express from "express";
import Comments from "../models/comments.js";

const router = express.Router();

router.post("/postComments", async (req, res) => {
  try {
    const { videoId, comments } = req.body;

    if (!videoId || !comments) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingComments = await Comments.findOne({ videoId });
    if (existingComments) {
      return res.status(409).json({ message: "Video ID already exists" });
    }

    const newComments = new Comments({ videoId, comments });
    await newComments.save();

    res.status(201).json({
      message: "Comments saved successfully",
      data: newComments,
    });
  } catch (error) {
    console.error("Error saving comments:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/checkCommentsQuery", async (req, res) => {
  try {
    const { videoId } = req.query;

    if (!videoId) {
      return res.status(400).json({ message: "Video Id is required." });
    }

    const searchResult = await Comments.findOne({ videoId }).sort({
      createdAt: -1,
    });

    if (!searchResult) {
      return res
        .status(404)
        .json({ message: "Video Id not found in the database." });
    }

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const createdAtDate = new Date(searchResult.createdAt);

    if (createdAtDate >= oneDayAgo) {
      return res
        .status(200)
        .json({ found: true, recent: true, data: searchResult });
    } else {
      return res.status(200).json({
        found: true,
        recent: false,
        message: "Data is older than 24 hours.",
      });
    }
  } catch (error) {
    console.error("Error checking search query:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
