import express from "express";
// import StudentEditProfile from '../../frontend/src/pages/Student/StudentSettings.js';
import { createStudent } from "../controllers/studentController.js";
import { studentEditProfile } from "../controllers/studentController.js";
import { upload } from "../lib/file-upload.js";

const studentRouters = express.Router();

studentRouters.post("/create", createStudent);
studentRouters.post(
  "/editProfile",
  upload.fields([{ name: 'profilePic', maxCount: 1 }]),
  studentEditProfile
);

export default studentRouters;
