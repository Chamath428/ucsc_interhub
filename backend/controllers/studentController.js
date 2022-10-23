import { PrismaClient } from '@prisma/client'
import {studentSchema} from '../models/studentModel.js';
import { studenteditProfileSchema } from '../models/studentModel.js';
import bcrypt from 'bcrypt';

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
                        profile_picture : req.files.profilePic[0].filename
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
  