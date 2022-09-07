import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './routes/userRouters.js';
import studentRouters from './routes/studentRouters.js';
import staffMemberRouters from './routes/staffMemberRouters.js';
import organizationRouters from './routes/organizationRouters.js';
import supervisorRouters from './routes/supervisorRouters.js';
import tokenRouters from './routes/tokenRouters.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json())

// const whiteList = ['http://localhost:5000/'];

// const corsOptions = {
//     origin:(origin,callback)=>{
//         if(whiteList.indexOf(origin) !== -1){
//             callback(null,true);
//         }else{
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     optionsSuccessStatus:200
// }

// app.use(cors(corsOptions)); //Cross Origine Resourses Sharing

app.use(bodyParser.json());
app.listen(PORT,console.log("Server is Running"));

const verify = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,"TheSecrectKey",(err)=>{
            if(err) return res.status(403).json({message:"Authentication token verification failed. Please login again!"});
            next();
        })
    }
    else{
        res.status(401).json({message:"Authentication token invalid"});
    }
}


app.use('/user',userRouters);
app.use('/student',verify,studentRouters);
app.use('/staffMember',verify,staffMemberRouters);
app.use('/organization',verify,organizationRouters);
app.use('/supervisor',verify,supervisorRouters);
app.use('/token',verify,tokenRouters);



