import app from "./server.js";
import mongoose from "mongoose";
import ReviewsDAO from "../dao/reviewsDAO.js";

const port = 3000;

async function startServer() {
  try {
    await mongoose.connect(`mongodb+srv://bagdauday:00af2650@cluster0.9g2d4wy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    const client = mongoose.connection.getClient();
    await ReviewsDAO.injectDB(client);

    app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
  } catch (err) {
    console.error("Couldn't connect to MongoDB", err);
  }
}
startServer();
