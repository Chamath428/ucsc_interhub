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
        addToWishList} from '../controllers/organizationController.js';

        import { upload } from "../lib/file-upload.js";


const organizationRouters = expree.Router();

organizationRouters.post("/createAdvertiesment",
upload.fields([{ name: 'profilePic', maxCount: 1 },{ name: 'profileVideo', maxCount: 1 }]),createAdvertiesment);
organizationRouters.post('/getAllAdvertiesmentS',getAllAdvertiesments);
organizationRouters.post('/getJobRoles',getJobRoles);
organizationRouters.post('/getAllInterviews',getAllInterviews);
organizationRouters.post('/markAsDone',markAsDone);
organizationRouters.post('/cancelInterview',cancelInterview);
organizationRouters.post('/getSelectedInterviews',getSelectedInterviews);
organizationRouters.post('/createInterview',createInterview);
organizationRouters.post('/getAllApplicants',getApplicantList)
organizationRouters.post("/handleWishlist",addToWishList)

// organizationRouters.post('/register',registerOrganization); this function moved to the user routes


export default organizationRouters;