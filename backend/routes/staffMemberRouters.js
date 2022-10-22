import express from 'express';
import { createStaffMember,scheduleCompanyVisit,ActiveRegisteredCompany,
    InactiveRegisteredCompany,PendingCompany,CompanyVisit,ActiveCompany } from '../controllers/staffMemberController.js';


const staffMemberRouters = express.Router();

staffMemberRouters.post('/create',createStaffMember);
staffMemberRouters.post('/scheduleCompanyVisit',scheduleCompanyVisit);
staffMemberRouters.post('/ActiveCompany',ActiveCompany);
staffMemberRouters.post('/ActiveRegisteredCompany',ActiveRegisteredCompany);
staffMemberRouters.post('/InactiveRegisteredCompany',InactiveRegisteredCompany);
staffMemberRouters.post('/PendingCompany',PendingCompany);
staffMemberRouters.post('/CompanyVisit',CompanyVisit);

export default staffMemberRouters;

