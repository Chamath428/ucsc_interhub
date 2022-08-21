import express from 'express';
import {sayHello} from '../controllers/userController.js';

const router = express.Router();

router.get('/',sayHello)

export default router;