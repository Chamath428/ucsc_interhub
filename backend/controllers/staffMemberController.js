import { PrismaClient } from '@prisma/client'
import {staffMemberSchema} from '../models/staffMemberModel.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createStaffMember = async (req,res)=>{
    console.log('create staff member');
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