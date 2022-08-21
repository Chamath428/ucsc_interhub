import expree from 'express';
import {registerOrganization} from '../controllers/organizationController.js';

const organizationRouters = expree.Router();

organizationRouters.post('/register',registerOrganization);


export default organizationRouters;