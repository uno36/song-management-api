import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import songsRouter from "./routes/songs.js";

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://emmanuelutofa:UqMjL2sEepbpQ9LM@cluster0.ltak2ir.mongodb.net/songsdb?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  appName: "Cluster0",
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use("/api", songsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
