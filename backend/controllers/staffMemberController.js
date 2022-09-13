import { PrismaClient } from '@prisma/client'
import {staffMemberSchema,staffMemberScheduleCompanyVisit} from '../models/staffMemberModel.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createStaffMember = async (req,res)=>{
    const{error,value}=staffMemberSchema.validate(req.body);

    if(!error){
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash("password", salt); 
        try{           
            const staffMember = await prisma.pdc.create({
                data:{
                    email_address:req.body.email_address,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    password:hashPassword,
                    role:req.body.role
                }
            })

            res.status(200).send(staffMember);
        }catch(error){
            res.status(500).send(error);
        }
    }else{
        res.status(500).send(error);
    }
}

export const scheduleCompanyVisit = async (req,res)=>{
    const{error,value}=staffMemberScheduleCompanyVisit.validate(req.body);

    if(!error){
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash("password", salt); 
        try{           
            const company_visit = await prisma.company_visit.create({
                data:{
                    company_id:req.body.company_id,
                    email_address:req.body.email_address,
                    date:req.body.date,
                    start_time:req.body.start_time,
                    company_visit_type:req.body.company_visit_type
                }
            })

            res.status(200).send(company_visit);
        }catch(error){
            console.log(error);
            res.status(400).send(error);
        }
    }else{
        console.log(error);
        res.status(500).send(error);
    }
}