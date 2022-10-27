import expree from 'express';
import {createAdvertiesment,
        getAllAdvertiesments,
        getJobRoles,
        getAllInterviews,
        markAsDone,
        cancelInterview,
        getSelectedInterviews,
        createInterview,
        getApplicantList,
        addToWishList,
        getApplicantDetails} from '../controllers/organizationController.js';

const organizationRouters = expree.Router();

organizationRouters.post('/createAdvertiesment',createAdvertiesment);
organizationRouters.post('/getAllAdvertiesmentS',getAllAdvertiesments);
organizationRouters.post('/getJobRoles',getJobRoles);
organizationRouters.post('/getAllInterviews',getAllInterviews);
organizationRouters.post('/markAsDone',markAsDone);
organizationRouters.post('/cancelInterview',cancelInterview);
organizationRouters.post('/getSelectedInterviews',getSelectedInterviews);
organizationRouters.post('/createInterview',createInterview);
organizationRouters.post('/getAllApplicants',getApplicantList)
organizationRouters.post("/handleWishlist",addToWishList)
organizationRouters.post("/getApplicantProfile",getApplicantDetails);

// organizationRouters.post('/register',registerOrganization); this function moved to the user routes


export default organizationRouters;