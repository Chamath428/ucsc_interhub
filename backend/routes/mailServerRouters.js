import express from 'express';
import { sendRegisterationMail } from '../controllers/mailServerController.js';

const mailServerRouters = express.Router();

mailServerRouters.post('/sendRegisteration',sendRegisterationMail);

export default mailServerRouters;