import express from 'express';
// import StudentEditProfile from '../../frontend/src/pages/Student/StudentSettings.js';
import {createStudent} from '../controllers/studentController.js';
import {studentEditProfile} from '../controllers/studentController.js';

const studentRouters = express.Router();

studentRouters.post('/create',createStudent);
studentRouters.post('/editProfile',studentEditProfile);

export default studentRouters;
