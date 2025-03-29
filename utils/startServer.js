import connectDB from "./connectDB.js";

const startServer = async (app, PORT, MONGO_URI) => {
  await connectDB(MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

export default startServer;
