import express from 'express';
import {sayHello,login,logout} from '../controllers/userController.js';
import {registerOrganization} from '../controllers/organizationController.js';

const router = express.Router();

router.get('/',sayHello)
router.post('/register',registerOrganization);
router.post('/login',login)
router.post('/logout',logout)

export default router;