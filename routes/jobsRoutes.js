import express from "express";
import {
  createJob,
  updateJob,
  deleteJob,
  getAllJobs,
  showStats,
} from "../controllers/jobsController.js";

import authenticateUser from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);

router.route("/stats").get(authenticateUser, showStats);

router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
