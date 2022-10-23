import expree from 'express';
import {createAdvertiesment,getAllAdvertiesments,getJobRoles} from '../controllers/organizationController.js';

const organizationRouters = expree.Router();

organizationRouters.post('/createAdvertiesment',createAdvertiesment);
organizationRouters.post('/getAllAdvertiesmentS',getAllAdvertiesments);
organizationRouters.post('/getJobRoles',getJobRoles);

// organizationRouters.post('/register',registerOrganization); this function moved to the user routes


export default organizationRouters;