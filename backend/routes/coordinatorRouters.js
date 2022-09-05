import express from 'express';
import { ViewAnnouncements,ViewSystemUsers } from '../controllers/coordinatorController.js';


const coordinatorRouters = express.Router();

coordinatorRouters.post('/',ViewSystemUsers);

export default coordinatorRouters;

