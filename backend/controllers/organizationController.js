import { PrismaClient } from '@prisma/client';
import { organizationSchema } from '../models/organizationModel.js';
import crypto from 'crypto'; 

const prisma = new PrismaClient();

export const registerOrganization = async (req,res) =>{
    const{error,value} = organizationSchema.validate(req.body);

    if(!error){
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(req.body.password,salt,  
                1000, 64, `sha512`).toString(`hex`);
        
        try{
            const organization = await prisma.company.create({
                data:{
                    name:req.body.name,
                    registration_number:req.body.registration_number,
                    date_of_establishment:req.body.date_of_establishment,
                    website:req.body.website,
                    address:req.body.address,
                    company_status:1,
                    no_of_employees:req.body.no_of_employees,
                    no_of_project_managers:req.body.no_of_project_managers,
                    no_of_tech_leads:req.body.no_of_tech_leads,
                    is_registered_other_uni:req.body.is_registered_other_uni,
                    password:hash,
                    username:req.body.username
                }
            })
            res.status(200).send();
            }catch(error){
                res.status(500).send(error)
            }
        }else{
            res.status(500).send(error);
        }
}