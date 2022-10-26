import express from 'express';
import { createStaffMember,scheduleCompanyVisit,ActiveRegisteredCompany,
    InactiveRegisteredCompany,PendingCompany,CompanyVisit,ActiveCompany, FilterCompanyVisitByType,FilterCompanyVisitByStatus,SortCompanyVisit,
    AllStudents,SelectedStudents,SearchAllStudentsByCourse,SearchAllStudentsByEntrolled,SortAllStudents,SelectedStudentsSearchByCourse,

    SortSelectedStudents,getJobRoles, completeVisit,SelectedStudentsSearchByJobRole,

   
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
staffMemberRouters.post('/SortSelectedStudents',SortSelectedStudents);
staffMemberRouters.post('/SelectedStudentsSearchByCourse',SelectedStudentsSearchByCourse);
staffMemberRouters.post('/getJobRoles',getJobRoles);
staffMemberRouters.post('/SelectedStudentsSearchByJobRole',SelectedStudentsSearchByJobRole);
staffMemberRouters.post('/CompanyVisitByType',FilterCompanyVisitByType);
staffMemberRouters.post('/CompanyVisitByStatus',FilterCompanyVisitByStatus);
staffMemberRouters.post('/SortCompanyVisit',SortCompanyVisit);

staffMemberRouters.post('/completeVisit',completeVisit);








export default staffMemberRouters;

