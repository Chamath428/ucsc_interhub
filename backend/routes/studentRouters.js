import express from 'express';
import {createStudent} from '../controllers/studentController.js';

const studentRouters = express.Router();

studentRouters.post('/create',createStudent);

export default studentRouters;
