import express from "express";
// import StudentEditProfile from '../../frontend/src/pages/Student/StudentSettings.js';
import {createStudent,getSelectedInterview,getAllInterviews,acceptInterview, declineInterview, studentEditProfileView, getAllAdvertiesments, getAdvertisementPreview, uploadCSV, uploadCV, getAllAdvertiesmentApplied,getSelectedPastInterview,getAllPastInterviews, getAllAnnouncements} from '../controllers/studentController.js';
// import { getAllAdvertiesmentApplied } from "../controllers/studentController.js";
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
studentRouters.post('/uploadCSV', upload.single('csv'), uploadCSV)
studentRouters.post('/editProfileView/*',studentEditProfileView)
studentRouters.post('/getAllAdvertiesmentS',getAllAdvertiesments);
studentRouters.post('/getAdvertisementPreview',getAdvertisementPreview)
studentRouters.post('/uploadCV/*', upload.single('cv'), uploadCV)
studentRouters.post('/getAllAdvertiesmentApplied',getAllAdvertiesmentApplied);
studentRouters.post('/getSelectedPastInterviews',getSelectedPastInterview)
studentRouters.post('/getAllPastInterviews',getAllPastInterviews)
studentRouters.post('/getAllAnnouncements',getAllAnnouncements)

export default studentRouters;
