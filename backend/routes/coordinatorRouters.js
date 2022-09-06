import express from 'express';
import { ViewAnnouncements,ViewSystemUsers } from '../controllers/coordinatorController.js';


const coordinatorRouters = express.Router();

coordinatorRouters.post('/Announcements',ViewAnnouncements);
coordinatorRouters.post('/SystemUsers',ViewSystemUsers);


export default coordinatorRouters;

