import { userSchema } from '../models/userModel.js';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {generateAccessToken,generateRefreshToken,terminateRefreshToken} from './tokenController.js';

const prisma = new PrismaClient();

export const sayHello = async (req,res)=>{
    res.send("no erors")
}

export const login = async (req,res)=>{
    const {error,value} = userSchema.validate(req.body);
    if(!error){
            // Student credit checking

            let student=null;
            if(!isNaN(parseInt(req.body.username))){
            student = await prisma.student.findUnique({
                where: {
                    index_number:parseInt(req.body.username)
                },
                select: {
                  index_number: true,
                  password: true,
                },
              });}

              if(student){
                const validPassword = await bcrypt.compare(req.body.password, student.password);
                if(validPassword){
                student.role="Student";
                student.accessToken = generateAccessToken(student.index_number,student.role);
                student.refreshToekn=generateRefreshToken(student.index_number,student.role);
                res.status(200).send(student);
             }else res.status(400).json({message:"Password does not match"});
            }

            // pdc credit checking

              else {
                const pdc = await prisma.pdc.findUnique({
                    where: {
                        email_address:req.body.username
                    },
                    select: {
                        email_address: true,
                        password: true,
                        role:true
                    },
                  });

                  if(pdc){
                    const validPassword = await bcrypt.compare(req.body.password, pdc.password);
                    if(validPassword){
                        if(pdc.role==1){
                            pdc.role="Coordinator";
                        }else {
                            pdc.role="Staff"
                        }
                        pdc.accessToken = generateAccessToken(pdc.email_address,pdc.role);
                        pdc.refreshToekn=generateRefreshToken(pdc.email_address,pdc.role);
                        res.status(200).send(pdc);
                     }else res.status(400).json({message:"Password does not match"});
                  }

                //   company credit checking

                  else{

                    const company = await prisma.company.findFirst({
                        where: {
                            username:req.body.username
                        },
                        select: {
                            company_id: true,
                            password: true,
                            name:true
                        },
                      });
                    if(company){
                        const validPassword = await bcrypt.compare(req.body.password, company.password);
                        if(validPassword){
                            company.role="Company";
                            company.accessToken = generateAccessToken(company.company_id,company.role);
                            company.refreshToekn=generateRefreshToken(company.company_id,company.role);
                            res.status(200).send(company);
                         }else res.status(400).json({message:"Password does not match"});
                    }

                    // supervisor credit checking

                    else {
                        const supervisor = await prisma.supervisor.findFirst({
                            where: {
                                email:req.body.username
                            },
                            select: {
                                supervisor_id: true,
                                password: true,
                                company_id:true
                            },
                          });
                        if(supervisor){
                            const validPassword = await bcrypt.compare(req.body.password, supervisor.password);
                            if(validPassword){
                                supervisor.role="Supervisor";
                                supervisor.accessToken = generateAccessToken(supervisor.supervisor_id,supervisor.role);
                                supervisor.refreshToekn=generateRefreshToken(supervisor.supervisor_id,supervisor.role);
                                res.status(200).send(supervisor);
                             }else res.status(400).json({message:"Password does not match"});
                        }
                        else res.status(400).json({message:"No user found!"});
                    }
                  }
              }
    }else{
        res.status(500).json({ message: 'Invalid data entered!' });
    }
}

export const logout = (req,res)=>{
    // pass the refresh token to the functoion
    terminateRefreshToken(req.token);
    res.status(200).json({message:"Logged out successfully!"});
}