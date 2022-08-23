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
            const company = await prisma.company.create({
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
            });

            const company_contacts = await prisma.company_contacts.create({
                data:{
                    company_id:company.company_id,
                    telephone_no:req.body.telephone_no
                }
            });

            const company_hr = await prisma.company_hr.create({
                data:{
                    company_id:company.company_id,
                    name:req.body.primaryContactName,
                    email:req.body.email,
                    landline_no:req.body.landline_no,
                    mobile_no:req.body.mobile_no
                }
            });

            const company_partners = await prisma.company_partners.create({
                data:{
                    company_id:company.company_id,
                    partners:req.body.partners
                }
                
            });

            const company_clients = await prisma.company_clients.create({
                data:{
                    company_id:company.company_id,
                    client:req.body.client
                }
                
            });

            res.status(200).send(company);
            }catch(error){
                res.status(400).send(error)
            }
        }else{
            res.status(510).send(error);
        }
}