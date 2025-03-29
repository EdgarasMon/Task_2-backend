import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    videoId: { type: String, required: true },
    comments: [
      {
        id: String,
        author: String,
        text: String,
        videoId: String,
      },
    ],
  },
  { timestamps: true }
);

const Comments = mongoose.model("comments", commentsSchema);
export default Comments;
