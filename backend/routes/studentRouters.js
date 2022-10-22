import express from 'express';
import {createStudent,getSelectedInterview,acceptInterview, declineInterview} from '../controllers/studentController.js';

const studentRouters = express.Router();

studentRouters.post('/create',createStudent);
studentRouters.post('/getSelectedInterviews',getSelectedInterview)
studentRouters.post('/acceptInterview',acceptInterview)
studentRouters.post('/declineInterview',declineInterview)

export default studentRouters;
