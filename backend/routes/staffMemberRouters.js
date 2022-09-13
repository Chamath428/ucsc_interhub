import express from 'express';
import { createStaffMember,scheduleCompanyVisit } from '../controllers/staffMemberController.js';


const staffMemberRouters = express.Router();

staffMemberRouters.post('/create',createStaffMember);
staffMemberRouters.post('/scheduleCompanyVisit',scheduleCompanyVisit);

export default staffMemberRouters;

