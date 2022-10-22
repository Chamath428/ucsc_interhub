import { PrismaClient } from '@prisma/client'
import {staffMemberSchema,staffMemberScheduleCompanyVisit} from '../models/staffMemberModel.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createStaffMember = async (req,res)=>{
    console.log('create staff member');
    const{error,value}=staffMemberSchema.validate(req.body);

    if(!error){
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash("password", salt); 
        try{           
            const staffMember = await prisma.pdc.create({
                data:{
                    email_address:req.body.email_address,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    password:hashPassword,
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
export const ActiveRegisteredCompany = async (req, res) => {

    try {
        const activeRegisteredCompany = await prisma.company.findMany({
            where: 
            {
                company_status: 2 , 
            },

            select: {
                name: true,
                company_contacts: {
                    select: {
                        telephone_no: true,
                    },
                },
                registration_number: true,
            }
        })
        res.status(200).send(activeRegisteredCompany);

        // console.dir(registeredCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}
export const InactiveRegisteredCompany = async (req, res) => {

    try {
        const InactiveRegisteredCompany = await prisma.company.findMany({
            where: {
                
                company_status: 3 , 
            },
            select: {
                name: true,
                company_contacts: {
                    select: {
                        telephone_no: true,
                    },
                },
                registration_number: true,
            }
        })
        res.status(200).send(InactiveRegisteredCompany);

        // console.dir(registeredCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}
export const PendingCompany = async (req, res) => {
    try {
        const PendingCompany = await prisma.company.findMany({
            where: {
                company_status: 1,

            },
            select: {
                name: true,
                company_contacts: {
                    select: {
                        telephone_no: true,
                    },
                },
                registration_number: true,

            }

        })
        res.status(200).send(PendingCompany);

        // console.dir(PendingCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}
export const ActiveCompany = async (req, res) => {

    try {
        const ActiveCompany = await prisma.company.findMany({
            where: {
                company_status: 2 ,
            },
            select: {
                company_id: true,
                name: true,
            }
        })
        res.status(200).send(ActiveCompany);

        // console.dir(ActiveCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}
export const CompanyVisit = async (req, res) => {


    try {
        const CompanyVisit = await prisma.company_visit.findMany({

            select: {
                company: {
                    select: {
                        name: true,

                    },
                },
                email_address:true,
                date: true,
                
                start_time: true,
                company_visit_types: {
                    select: {
                        type: true,
                    },
                },
                company_visit_status_types:{
                    select: {
                        status:true,
                    },
                },


            }
        })
        res.status(200).send(CompanyVisit);

        // console.dir(CompanyVisit, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
}
export const scheduleCompanyVisit = async (req,res)=>{
    const{error,value}=staffMemberScheduleCompanyVisit.validate(req.body);

    if(!error){
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash("password", salt); 
        try{           
            const company_visit = await prisma.company_visit.create({
                data:{
                    company_id:req.body.company_id,
                    email_address:req.body.email_address,
                    date:req.body.date,
                    start_time:req.body.start_time,
                    company_visit_type:req.body.company_visit_type
                }
            })

            res.status(200).send(company_visit);
        }catch(error){
            console.log(error);
            res.status(400).send(error);
        }
    }else{
        console.log(error);
        res.status(500).send(error);
    }
}