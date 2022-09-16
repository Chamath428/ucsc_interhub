import express from 'express';
import {getNewAccessToken} from '../controllers/tokenController.js';

const tokenRouters = express.Router();

tokenRouters.post('/getNewToekn',getNewAccessToken);

export default tokenRouters;