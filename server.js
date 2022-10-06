import express from "express";

// middlewares
import cors from "cors";
import "express-async-errors";
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";
import morgan from "morgan";
import authenticateUser from "./middleware/auth.js";
// connect DB

import connectDB from "./db/connect.js";

// env

import dotenv from "dotenv";
dotenv.config();

// route
import jobRoutes from "./routes/jobsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// if (process.env.NODE_ENV !== "production") {
//   app.use(morgan("dev"));
// }

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authenticateUser, jobRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("server is running...");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
