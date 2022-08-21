import express from 'express';
import { createStaffMember } from '../controllers/staffMemberController.js';


const staffMemberRouters = express.Router();

staffMemberRouters.post('/create',createStaffMember);

export default staffMemberRouters;

