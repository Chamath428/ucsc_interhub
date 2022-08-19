import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './routes/userRouters.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

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


app.use('/users',userRouters);

