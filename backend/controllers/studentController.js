import { PrismaClient } from '@prisma/client'
import {studentSchema} from '../models/studentModel.js';

const prisma = new PrismaClient();

export const createStudent = async(req,res)=>{
    
        const {error,value} = studentSchema.validate(req.body);
        if(!error){
            try{
                const student = await prisma.student.create({
                    data:{
                        index_number : req.body.index_number,
                        registration_number : req.body.registration_number,
                        name : req.body.name,
                        degree : req.body.degree,
                        gpa : req.body.gpa,
                        program_id :1
                    }
                })
                const message = {"Message":"Student Created Successfull"}
                res.status(200).send(student);
            }catch(error){
                res.status(400).send(error);
            }
            
        }
            res.status(500).send(error);
    }

export const getSelectedInterview=async (req,res) =>{
    try{
        // const interviews = await prisma.interview.findMany({
        //     where:{
        //         date:req.body.selectedDate
        //     },
        //     select:{
        //         interview_id:true,
        //         date:true,
        //         start_time:true,
        //         select:{
        //             company:{
        //                 where:{
        //                     company_id
        //                 },
        //             }
        //         },
        //     }
        // });
        const interviews = await prisma.$queryRaw `SELECT interview.interview_id,interview.date,interview.start_time,
                                                          company.name,
                                                          company_contacts.telephone_no,
                                                          company_visit_types.type,
                                                          interview_status_types.status
                                                    FROM interview
                                                    LEFT JOIN company ON company.company_id=interview.company_id
                                                    LEFT JOIN company_contacts ON company_contacts.company_id=interview.company_id
                                                    LEFT JOIN company_visit_types ON company_visit_types.id=interview.interview_type
                                                    LEFT JOIN interview_status_types ON interview_status_types.id=interview.interview_status
                                                    WHERE interview.date=${req.body.selectedDate} AND interview.index_number=${req.body.indexNumber}`;
        res.status(200).send(interviews);
    }catch(error){
        res.status(400).send(error);
    }
}

export const acceptInterview = async(req,res)=>{
    try{
        const intervie = await prisma.interview.update({
            where:{
                interview_id:req.body.interviewId
            },
            data:{
                interview_status:2
            }
        });
        res.status(200).json({message:"Invitation accepted!"})
    }catch(error){
        res.status(400).send(error);
    }
}
  