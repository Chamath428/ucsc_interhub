import express from 'express';
import {createStudent,getSelectedInterview,acceptInterview} from '../controllers/studentController.js';

const studentRouters = express.Router();

studentRouters.post('/create',createStudent);
studentRouters.post('/getSelectedInterviews',getSelectedInterview)
studentRouters.post('/acceptInterview',acceptInterview)

export default studentRouters;
