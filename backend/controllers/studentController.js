import { PrismaClient } from '@prisma/client'
import {studentSchema} from '../models/studentModel.js';
import { studenteditProfileSchema } from '../models/studentModel.js';

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
        // name: name,
        // password: password,
        // email : email,
        // about_me : about_me,
        // github : github,
        // facebook : facebook,
        // linkedin : linkedin,
        console.log("Comming")
        const {error,value} = studenteditProfileSchema.validate(req.body);
        console.log(error)
        if(!error){
            try{
                const student = await prisma.student.update({
                    where: {
                        index_number: req.body.index_number,
                      },
                    data:{
                        name : req.body.name,
                        password : req.body.password,
                        email : req.body.email,
                        about_me : req.body.about_me,
                        github : req.body.github,
                        facebook : req.body.facebook,
                        linkedin : req.body.linkedin
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
  