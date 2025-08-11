import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  createResume,
  getUserResumes,
  getResume,
  updateResume,
  deleteResume,
} from "./routes/resumes";
import { createUser, getUserByEmail, getUser } from "./routes/users";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // User routes
  app.post("/api/users", createUser);
  app.get("/api/users/email/:email", getUserByEmail);
  app.get("/api/users/:id", getUser);

  // Resume routes
  app.post("/api/resumes", createResume);
  app.get("/api/users/:userId/resumes", getUserResumes);
  app.get("/api/resumes/:id", getResume);
  app.put("/api/resumes/:id", updateResume);
  app.delete("/api/resumes/:id", deleteResume);

  return app;
}
