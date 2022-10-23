import express from 'express';
import { ViewAnnouncements,ViewSystemUsers,RegisteredCompany,PendingCompany,CompanyVisit,StudentList,SelectedStudentList,createAnnouncements,ViewAllPrograms,CurrentProgramDetails,createNewPlacementPrograme,endCurrentPrograme} from '../controllers/coordinatorController.js';


const coordinatorRouters = express.Router();

coordinatorRouters.post('/Announcements',ViewAnnouncements);
coordinatorRouters.post('/SystemUsers',ViewSystemUsers);
coordinatorRouters.post('/RegisteredCompany',RegisteredCompany);
coordinatorRouters.post('/PendingCompany',PendingCompany);
coordinatorRouters.post('/CompanyVisit',CompanyVisit);
coordinatorRouters.post('/StudentList',StudentList);
coordinatorRouters.post('/SelectedStudentList',SelectedStudentList);
coordinatorRouters.post('/createAnnouncements',createAnnouncements);
coordinatorRouters.post('/AllPrograms',ViewAllPrograms);
coordinatorRouters.post('/CurrentProgramDetails',CurrentProgramDetails);
coordinatorRouters.post('/createNewPlacementPrograme',createNewPlacementPrograme);
coordinatorRouters.post('/endCurrentPrograme',endCurrentPrograme);


export default coordinatorRouters;

