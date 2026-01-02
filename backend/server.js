import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());

// MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));
  console.log("MONGO_URI:", process.env.MONGO_URI);

// Routes
app.use("/api/items", itemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on " + PORT));


