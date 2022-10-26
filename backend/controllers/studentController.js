import { PrismaClient } from '@prisma/client'
import {studentSchema} from '../models/studentModel.js';
import { studenteditProfileSchema } from '../models/studentModel.js';
import { studentappliedInternshipsSchema } from '../models/studentModel.js';
import bcrypt from 'bcrypt';
import fs from "fs";
import readline from "readline";

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

export const getAllInterviews = async (req,res)=>{
    console.log(req.body.indexNumber)
    try{
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
                                                    WHERE interview.index_number=${req.body.indexNumber}`;
        const dates = await prisma.interview.findMany({
            select:{
                date:true
            },
            where:{
                index_number:req.body.indexNumber
            }
        })
        res.status(200).send([interviews,dates]);
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

export const acceptInterview = async(req,res)=>{
    try{
        const interview = await prisma.interview.update({
            where:{
                interview_id:req.body.interviewId
            },
            data:{
                interview_status:2
            }
        });
        res.status(200).json({message:"Invitation accepted!"})
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

export const declineInterview = async(req,res)=>{
    try{
        const interview = await prisma.interview.update({
            where:{
                interview_id:req.body.interviewId
            },
            data:{
                interview_status:3
            }
        });

        const declineInterview = await prisma.interview_decline_message.create({
        data:{
            interview_id:req.body.interviewId,
            message:req.body.decline_messagge
        }
        })
        res.status(200).json({message:"Invitation declined!"})
    }catch(error){
        res.status(400).send(error);
    }
}

    export const studentEditProfile = async(req,res)=>{
        console.log("Comming")
        const {error,value} = studenteditProfileSchema.validate(req.body);
        console.log(req.files['profilePic'])
        console.log(req.files['profileVideo'])
        if(!error){
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);   
            try{
                const student = await prisma.student.update({
                    where: {
                        index_number: parseInt (req.body.index_number),
                      },
                    data:{
                        name : req.body.name,
                        password : hashPassword,
                        email : req.body.email,
                        about_me : req.body.about_me,
                        github : req.body.github,
                        facebook : req.body.facebook,
                        linkedin : req.body.linkedin,
                        profile_picture : req.files.profilePic[0].filename,
                        intro_video : req.files.profileVideo[0].filename
                    }
                })
                const message = {"Message":"Student Created Successfull"}
                res.status(200).send(student);
            }catch(error){
                console.log(error);
                res.status(400).send(error);
            }
            
        }
            res.status(500).send(error);
    }

   export const uploadCSV  = async (req, res) => { 
 
    const stream = fs.createReadStream(req.file.path);
    const rl = readline.createInterface({ input: stream });
    let data = [];
     
    rl.on("line", (row) => {
        data.push(row.split(","));
    });
     
    rl.on("close", async () => {
        console.log(data);
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const student = await prisma.student.create({
                data:{
                    index_number :parseInt(row[0]),
                    registration_number : row[1],
                    name : row[2],
                    nic:row[3],
                    email:row[4],
                    degree : parseInt(row[5]),
                    gpa :  row[6],
                    student_status:1,
                    program_id :1
                }
            })
            
        }
       
        res.json({"msg":"success"})
    });
   

    
   }

    export const studentEditProfileView = async (req, res) => { 

        
        try {
            var indexno=parseInt(req.params['0'])
            console.log(indexno)
            const student = await prisma.student.findUnique({
                where: 
                {
                    index_number : indexno , 
                },
    
                select: {
                    name: true,
                    // company_contacts: {
                    //     select: {
                    //         telephone_no: true,
                    //     },
                    // },
                    // password : hashPassword,
                    email : true,
                    about_me : true,
                    github : true,
                    facebook : true,
                    linkedin : true,
                    profile_picture : true,
                    intro_video : true
                }
            })
            res.status(200).send(student);
    
            // console.dir(registeredCompany, { depth: null })
        } catch (error) {
            res.status(400).send(error);
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
                                                                  WHERE advertisement.status = 2
                                                            ORDER BY advertisement.advertisement_id DESC`;
            res.status(200).send(advertiesments)
        }catch(error){
            res.status(400).json({message:"Something went wrong when fetchingn the data!"})
        }
    }



    export const getAdvertisementPreview = async (req,res)=>{
        try{
            
            const advertiesments = await prisma.$queryRaw `SELECT advertisement.advertisement_id,
                                                                  company.company_id,
                                                                  company.name,
                                                                  job_roles.job_role,
                                                                  advertisement_status.type,
                                                                  advertisement_technologies.technologies,
                                                                  advertisement.requested_interns,
                                                                  advertisement.job_description
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
                                                                  LEFT JOIN 
                                                                  advertisement_technologies 
                                                                  ON advertisement.advertisement_id = advertisement_technologies.advertisement_id
                                                            WHERE
                                                                  advertisement.advertisement_id=${req.body.addId}
                                                            ORDER BY advertisement.advertisement_id DESC`;
            res.status(200).send(advertiesments)
        }catch(error){
            res.status(400).json({message:"Something went wrong when fetchingn the data!"})
        }
    }



    export const uploadCV = async(req,res)=>{
        console.log("Comming")
        console.log(req.params);
        // const {error,value} = studentappliedInternshipsSchema.validate(req.body);
        console.log(req.body)
        // if(!error){
           
            // const salt = await bcrypt.genSalt(10);
            // const hashPassword = await bcrypt.hash(req.body.password, salt);   
            try{

                var indexno=parseInt(req.params['0'])
                // var addId=parseInt(req.params['1'])
                
                console.log("try")
                const student = await prisma.student_applied_internships.create({
                    // where: {
                    //     index_number: 19000219,
                    //   },
                    data:{

                        index_number:indexno,
                        // advertisement_id: 16,
                        advertisement_id: parseInt(req.body.addId),
                        cv:req.file.filename,
                        is_wish_list:0,
                        // company_id : 39
                        company_id:parseInt(req.body.comId)

                    }
                })
                console.log("eee");

                const message = {"Message":"Student Created Successfull"}
                res.status(200).send(student);
            }catch(error){
                console.log(error);
                res.status(400).send(error);
            }
            
    //    } 
            // res.status(500).send(error);
    }


    export const getAllAdvertiesmentApplied = async (req,res)=>{
        try{
            const advertiesments = await prisma.$queryRaw `SELECT student_applied_internships.advertisement_id,
                                                            advertisement.title,
                                                            company.name,
                                                            job_roles.job_role
                                                            FROM student_applied_internships
                                                            LEFT JOIN
                                                            company
                                                            ON student_applied_internships.company_id=company.company_id 
                                                            LEFT JOIN
                                                            advertisement
                                                            ON student_applied_internships.advertisement_id=advertisement.advertisement_id
                                                            LEFT JOIN
                                                            job_roles
                                                            ON advertisement.job_role=job_roles.id
                                                            WHERE advertisement.status = 2 AND student_applied_internships.index_number = ${req.body.index_number}
                                                    ORDER BY advertisement.advertisement_id DESC`;
            res.status(200).send(advertiesments)
        }catch(error){
            res.status(400).json({message:"Something went wrong when fetchingn the data!"})
        }
    }

  