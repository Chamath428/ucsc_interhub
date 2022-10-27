import { PrismaClient } from '@prisma/client';
import { organizationSchema,createAdvertiesmentSchema } from '../models/organizationModel.js';
import crypto from 'crypto'; 
import bcrypt from 'bcrypt';
import { log } from 'console';

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
                    title:req.body.title,
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
                                                              advertisement.title,
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

export const getAllInterviews= async (req,res)=>{
    try{
        const interviews = await prisma.$queryRaw `SELECT interview.interview_id,
                                                        interview.start_time,
                                                        interview.date,
                                                        interview_status_types.status,
                                                        student.name,
                                                        student.email,
                                                        company_visit_types.type
                                                    FROM interview
                                                    LEFT JOIN interview_status_types
                                                    ON interview.interview_status=interview_status_types.id
                                                    LEFT JOIN student
                                                    ON interview.index_number=student.index_number
                                                    LEFT JOIN company_visit_types
                                                    ON interview.interview_type=company_visit_types.id
                                                    WHERE interview.company_id=${req.body.companyId}`;

        const dates = await prisma.interview.findMany({
            select:{
                date:true
            },
            where:{
                company_id:req.body.companyId
            }
        })

        const applicants = await prisma.$queryRaw `SELECT student_applied_internships.index_number,
                                                          student_applied_internships.advertisement_id,
                                                          student.name,
                                                          advertisement.title,
                                                          job_roles.job_role
                                                    FROM student_applied_internships
                                                    LEFT JOIN student
                                                    ON student_applied_internships.index_number=student.index_number
                                                    LEFT JOIN advertisement
                                                    ON student_applied_internships.advertisement_id=advertisement.advertisement_id
                                                    LEFT JOIN job_roles
                                                    ON advertisement.job_role=job_roles.id
                                                    WHERE student_applied_internships.company_id=${req.body.companyId}`

        res.status(200).send([interviews,dates,applicants]);
    }catch(error){
        res.status(400).json({message:"Someting went wrong when getting interview data!"});
    }
}

export const getSelectedInterviews = async(req,res)=>{
    try{
        const interviews = await prisma.$queryRaw `SELECT interview.interview_id,
                                                        interview.start_time,
                                                        interview.date,
                                                        interview_status_types.status,
                                                        student.name,
                                                        student.email,
                                                        company_visit_types.type
                                                    FROM interview
                                                    LEFT JOIN interview_status_types
                                                    ON interview.interview_status=interview_status_types.id
                                                    LEFT JOIN student
                                                    ON interview.index_number=student.index_number
                                                    LEFT JOIN company_visit_types
                                                    ON interview.interview_type=company_visit_types.id
                                                    WHERE interview.company_id=${req.body.companyId} AND interview.date=${req.body.selectedDate}`;

        res.status(200).send(interviews);
    }catch(error){
        res.status(400).json({message:"Someting went wrong when getting interview data!"});
    }
}

export const markAsDone = async (req,res)=>{
    try{
        const interview = await prisma.interview.update({
            where:{
                interview_id:req.body.interviewId
            },
            data:{
                interview_status:5
            }
        });
        res.status(200).send(interview);
    }catch(error){
        console.log(error);
        res.status(400).json({message:"Something went wrong when updating the interview!"});
    }
}

export const cancelInterview = async (req,res)=>{
    try{
        const interview = await prisma.interview.update({
            where:{
                interview_id:req.body.interviewId
            },
            data:{
                interview_status:4
            }
        });
        res.status(200).send(interview);
    }catch(error){
        console.log(error);
        res.status(400).json({message:"Something went wrong when canceling the interview!"});
    }
}

export const createInterview = async(req,res)=>{
    try{
        console.log(req.body.time)
        const interview = await prisma.$queryRaw `INSERT INTO interview(company_id,index_number,date,start_time,interview_type)
                                                  VALUES(${req.body.companyId},${req.body.indexNumber},${req.body.date},${req.body.time},${req.body.type})`
        res.status(200).send(interview);
    }catch(error){
        console.log(error);
        res.status(400).json({message:"Something went wrong when creating the interview"});
    }
}

export const getApplicantList = async (req,res)=>{
    try{
        const applicantList = await prisma.$queryRaw `SELECT student_applied_internships.advertisement_id,student_applied_internships.index_number,student_applied_internships.is_wish_list,student.name,advertisement.title
        FROM student_applied_internships
        LEFT JOIN
        student
        ON student_applied_internships.index_number=student.index_number
        LEFT JOIN advertisement
        ON student_applied_internships.advertisement_id=advertisement.advertisement_id
        WHERE student_applied_internships.company_id=${req.body.companyId}`;

        const wishlistedStudent = await prisma.$queryRaw `SELECT student_applied_internships.advertisement_id,student_applied_internships.index_number,student_applied_internships.is_wish_list,student.name,advertisement.title
        FROM student_applied_internships
        LEFT JOIN
        student
        ON student_applied_internships.index_number=student.index_number
        LEFT JOIN advertisement
        ON student_applied_internships.advertisement_id=advertisement.advertisement_id
        WHERE student_applied_internships.company_id=${req.body.companyId} AND student_applied_internships.is_wish_list=1`;

        console.log([applicantList,wishlistedStudent]);
        
        res.status(200).send([applicantList,wishlistedStudent]);
    }catch(error){
        res.status(200).send(error);
    }
}

export const addToWishList = async (req,res)=>{
    console.log(req.body.advertisement_id)
    try{
        const applicant = await prisma.$queryRaw `UPDATE student_applied_internships SET is_wish_list=${req.body.is_wish_list} WHERE index_number=${req.body.index_number} AND advertisement_id=${req.body.advertisement_id}`;
        res.status(200).send(applicant);
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

export const getApplicantDetails = async(req,res)=>{
    console.log(req.body.advertisement_id);
    try{
        const applicant = await prisma.$queryRaw `SELECT student_applied_internships.cv,student.name,student.about_me,student_degree.degree
                                                    FROM student
                                                    LEFT JOIN
                                                    student_applied_internships
                                                    ON student.index_number=student_applied_internships.index_number
                                                    LEFT JOIN
                                                    student_degree
                                                    ON student_degree.id=student.degree
                                                    WHERE
                                                    student_applied_internships.index_number=${req.body.studentId}
                                                    AND 
                                                    student_applied_internships.advertisement_id=${req.body.advertisement_id}`;
        res.status(200).send(applicant);
        console.log(applicant)
    }catch(error){
        res.status(400).send(error);
    }
}