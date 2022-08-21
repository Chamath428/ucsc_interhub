import { PrismaClient } from '@prisma/client'
import {staffMemberSchema} from '../models/staffMemberModel.js';

import crypto from 'crypto'; 

const prisma = new PrismaClient();

export const createStaffMember = async (req,res)=>{
    const{error,value}=staffMemberSchema.validate(req.body);

    if(!error){
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(req.body.password,salt,  
                1000, 64, `sha512`).toString(`hex`);
        try{           
            const staffMember = await prisma.pdc.create({
                data:{
                    email_address:req.body.email_address,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    password:hash,
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