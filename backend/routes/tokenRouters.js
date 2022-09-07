import express from 'express';
import {getNewAccessToken} from '../controllers/tokenController.js';

const tokenRouters = express.Router();

tokenRouters.get('/getNewToekn',getNewAccessToken);

export default tokenRouters;