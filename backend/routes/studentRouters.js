import express from 'express';
import {createStudent,getSelectedInterview} from '../controllers/studentController.js';

const studentRouters = express.Router();

studentRouters.post('/create',createStudent);
studentRouters.post('/getSelectedInterviews',getSelectedInterview)

export default studentRouters;
