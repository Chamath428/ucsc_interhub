import express from 'express';
import {sayHello,login} from '../controllers/userController.js';

const router = express.Router();

router.get('/',sayHello)
router.post('/login',login)

export default router;