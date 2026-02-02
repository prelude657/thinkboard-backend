import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/notesRoutes.js";
import ratelimiter from "./middleware/rateLimiter.js";

const app = express();


app.use(express.json());
app.use (ratelimiter);

// 👇 NOTES ROUTES
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

connectDB().then(() =>{
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  });
});
