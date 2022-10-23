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
                is_active: true,
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

        // console.dir(CompanyVisit, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}




export const StudentList = async (req, res) => {


    try {
        const StudentList = await prisma.interview.findMany({

            select: {

                student: {
                    select: {
                        index_number: true,
                        name: true,
                        cv: true,

                    },
                },
                
                company: {
                    select: {
                        name: true,
                    }
                },
                interview_status_types: {
                    select: {
                        status: true,
                    },
                },
            }

        })
        res.status(200).send(StudentList);
        // console.dir(StudentList, { depth: null })
    } catch (error) {
    console.log("hu");
        // console.log(error.message)
        res.status(400).send(error);
    }

}


export const SelectedStudentList = async (req, res) => {


    try {
        const selectedStudentList = await prisma.interview.findMany({

            where: {
                interview_status: 2,
            },
            select: {


                student: {
                    select: {
                        index_number: true,
                        name: true,
                        gpa: true,
                    },
                },

                company: {
                    select: {
                        name: true,
                    }
                },
            }

        })
        res.status(200).send(selectedStudentList);

        // console.dir(selectedStudentList, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}


export const createAnnouncements = async (req, res) => {

    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();
    // console.log(currentTime)
    const { error, value } = coordinatorSchema.validate(req.body);
    // console.log(value);
    //    console.log(error);

    if (!error) {

        try {

            const createNewAnnouncements = await prisma.announcement.create({
                data: {
                    title: req.body.title,
                    body: req.body.body,
                    time: currentTime,
                    date: currentDate,
                    type: req.body.type,
                    email_address: req.body.email_address,



                }
            })

            res.status(200).send(createNewAnnouncements);
        } catch (error) {
            res.status(500).send(error);
        }
    } else {

        res.status(500).send(error);
    }
}