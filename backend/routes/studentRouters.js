import express from "express";
// import StudentEditProfile from '../../frontend/src/pages/Student/StudentSettings.js';
import {createStudent,getSelectedInterview,getAllInterviews,acceptInterview, declineInterview, studentEditProfileView} from '../controllers/studentController.js';
import { studentEditProfile } from "../controllers/studentController.js";
import { upload } from "../lib/file-upload.js";

const studentRouters = express.Router();

studentRouters.post("/create", createStudent);
studentRouters.post(
  "/editProfile",
  upload.fields([{ name: 'profilePic', maxCount: 1 },{ name: 'profileVideo', maxCount: 1 }]),
  studentEditProfile
);
studentRouters.post('/getSelectedInterviews',getSelectedInterview)
studentRouters.post('/getAllInterviews',getAllInterviews)
studentRouters.post('/acceptInterview',acceptInterview)
studentRouters.post('/declineInterview',declineInterview)
studentRouters.post('/editProfileView/*',studentEditProfileView)


export default studentRouters;
