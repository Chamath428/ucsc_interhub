import express from 'express';
import { createSupervisor } from '../controllers/supervisorController.js';

const supervisorRouters = express.Router();

supervisorRouters.post('/create',createSupervisor);

export default supervisorRouters;