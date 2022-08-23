import { PrismaClient } from '@prisma/client'
import { supervisorSchema } from '../models/supervisorModel.js';

const prisma = new PrismaClient();

export const createSupervisor = async (req,res)=>{
    const{error,value}=supervisorSchema.validate(req.body);

    if(!error){
        try{
            const supervisor = await prisma.supervisor.create({
                data:{
                    name:req.body.name,
                    email:req.body.email,
                    company_id:req.body.company_id
                }
            });
            res.status(200).send(supervisor);
        }catch(error){
            res.status(400).send(error)
        }
    }else {
        res.status(500).send(error)
    }
}