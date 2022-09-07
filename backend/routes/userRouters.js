import express from 'express';
import {sayHello,login,logout} from '../controllers/userController.js';

const router = express.Router();

router.get('/',sayHello)
router.post('/login',login)
router.post('/logout',logout)

export default router;