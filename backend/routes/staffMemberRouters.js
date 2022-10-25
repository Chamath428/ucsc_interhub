import express from 'express';
import { createStaffMember,scheduleCompanyVisit,ActiveRegisteredCompany,
    InactiveRegisteredCompany,PendingCompany,CompanyVisit,ActiveCompany, FilterCompanyVisitByType,FilterCompanyVisitByStatus,
    AllStudents,SelectedStudents,SearchAllStudentsByCourse,SearchAllStudentsByEntrolled,SortAllStudents,
   
} from '../controllers/staffMemberController.js';


const staffMemberRouters = express.Router();

staffMemberRouters.post('/create',createStaffMember);
staffMemberRouters.post('/scheduleCompanyVisit',scheduleCompanyVisit);
staffMemberRouters.post('/ActiveCompany',ActiveCompany);
staffMemberRouters.post('/ActiveRegisteredCompany',ActiveRegisteredCompany);
staffMemberRouters.post('/InactiveRegisteredCompany',InactiveRegisteredCompany);
staffMemberRouters.post('/PendingCompany',PendingCompany);
staffMemberRouters.post('/CompanyVisit',CompanyVisit);
staffMemberRouters.post('/AllStudents',AllStudents);
staffMemberRouters.post('/SelectedStudents',SelectedStudents);
staffMemberRouters.post('/AllStudentsSearchByCourse',SearchAllStudentsByCourse);
staffMemberRouters.post('/SearchStudentsSearchByEntrolled',SearchAllStudentsByEntrolled);
staffMemberRouters.post('/SortAllStudents',SortAllStudents);
staffMemberRouters.post('/CompanyVisitByType',FilterCompanyVisitByType);
staffMemberRouters.post('/CompanyVisitByStatus',FilterCompanyVisitByStatus);




export default staffMemberRouters;

