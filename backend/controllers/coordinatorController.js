import { coordinatorSchema } from '../models/coordinatorModel.js';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const ViewAnnouncements = async (req, res) => {

    try {
        const announcement = await prisma.announcement.findMany({
            select: {
                title: true,

                announcement_types: {
                    select: {
                        type: true,


                    },
                },

            }

        })
        res.status(200).send(announcement);

        // console.dir(announcement, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}

export const ViewSystemUsers = async (req, res) => {

    // const { error, value } = coordinatorSchema.validate(req.body);


    try {
        const user = await prisma.pdc.findMany({
            select: {
                first_name: true,
                last_name: true,

                pdc_role: {
                    select: {
                        role: true,


                    },
                },


            }



        })
        res.status(200).send(user);

        // console.dir(user, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }



}



export const RegisteredCompany = async (req, res) => {

    try {
        const registeredCompany = await prisma.company.findMany({
            where: {
                company_status: 2,

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
        res.status(200).send(registeredCompany);

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



export const CompanyVisit = async (req, res) => {
    console.log("Company Visit");

    try {
        const CompanyVisit = await prisma.company_visit.findMany({

            select: {
                date: true,
                visited_type: true,
                company: {
                    select: {
                        name: true,


                    },
                },
                start_time: true,
                company_visit_types: {
                    select: {
                        type: true,


                    },
                },


            }



        })
        res.status(200).send(CompanyVisit);

        console.dir(CompanyVisit, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}
