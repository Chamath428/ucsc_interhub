import { PrismaClient } from '@prisma/client';
import { organizationSchema,createAdvertiesmentSchema } from '../models/organizationModel.js';
import crypto from 'crypto'; 
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const registerOrganization = async (req,res) =>{
    const{error,value} = organizationSchema.validate(req.body);

    if(!error){
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);        
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
                    password:hashPassword,
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
            res.status(500).send(error);
        }
}

export const createAdvertiesment = async(req,res)=>{
    const {error,value} = createAdvertiesmentSchema.validate(req.body);
    if(!error){
        try{

            const program_id = await prisma.internship_program.findFirst({
                where:{
                    is_active:1
                }
            })

            const addvertiesment = await prisma.advertisement.create({
                data:{
                    job_role:req.body.jobCategory,
                    job_description:req.body.description,
                    requested_interns:req.body.vacancies,
                    advertisement_video:req.body.videoUrl,
                    advertisement_video:req.body.videoUrl,
                    company_id:req.body.companyId,
                    program_id:program_id.program_id
                }
            })

            const addvertiesmentTechnologies = await prisma.advertisement_technologies.create({
                data:{
                    advertisement_id:addvertiesment.advertisement_id,
                    technologies:req.body.technologies
                }
            })
            res.status(200).send(addvertiesment)
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }

    }else{
        console.log(error);
        res.status(500).json({message:"Error while creating the advertiesment!"})
    }
}

export const getAllAdvertiesments = async (req,res)=>{
    try{
        const advertiesments = await prisma.$queryRaw `SELECT advertisement.advertisement_id,
                                                              company.name,
                                                              job_roles.job_role,
                                                              advertisement_status.type
                                                              FROM advertisement
                                                              LEFT JOIN
                                                              company
                                                              ON advertisement.company_id=company.company_id
                                                              LEFT JOIN
                                                              job_roles
                                                              ON advertisement.job_role=job_roles.id
                                                              LEFT JOIN
                                                              advertisement_status
                                                              ON advertisement.status=advertisement_status.id
                                                        WHERE
                                                              advertisement.company_id=${req.body.companyId}
                                                        ORDER BY advertisement.advertisement_id DESC`;
        res.status(200).send(advertiesments)
    }catch(error){
        res.status(400).json({message:"Something went wrong when fetchingn the data!"})
    }
}

export const getJobRoles = async (req,res)=>{
    try{
        const jobRoles = await prisma.job_roles.findMany({
            orderBy:{
                    id:'asc'
            }
        });
        res.status(200).send(jobRoles);
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}