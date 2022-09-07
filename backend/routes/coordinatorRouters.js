import express from 'express';
import { ViewAnnouncements,ViewSystemUsers,RegisteredCompany } from '../controllers/coordinatorController.js';


const coordinatorRouters = express.Router();

coordinatorRouters.post('/Announcements',ViewAnnouncements);
coordinatorRouters.post('/SystemUsers',ViewSystemUsers);
coordinatorRouters.post('/RegisteredCompany',RegisteredCompany);



export default coordinatorRouters;

