import { coordinatorSchema } from "../models/coordinatorModel.js";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { maxHeaderSize } from "http";

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
            },
        });
        res.status(200).send(announcement);

        // console.dir(announcement, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
            },
        });
        res.status(200).send(user);
        // console.dir(user, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
            },
        });
        res.status(200).send(registeredCompany);

        // console.dir(registeredCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
            },
        });
        res.status(200).send(PendingCompany);

        // console.dir(PendingCompany, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
            },
        });
        res.status(200).send(CompanyVisit);

        // console.dir(CompanyVisit, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
                    },
                },
                interview_status_types: {
                    select: {
                        status: true,
                    },
                },
            },
        });
        res.status(200).send(StudentList);
        // console.dir(StudentList, { depth: null })
    } catch (error) {
        // console.log(error.message)
        res.status(400).send(error);
    }
};

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
                    },
                },
            },
        });
        res.status(200).send(selectedStudentList);

        // console.dir(selectedStudentList, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }
};

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
                },
            });

            res.status(200).send(createNewAnnouncements);
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(500).send(error);
    }
};

export const ViewAllPrograms = async (req, res) => {
    try {
        const ViewAllPrograms = await prisma.internship_program.findMany({
            select: {
                batch_no: true,
                is_active: true,
                end_date: true,
                start_date: true,

                internship_program_status: {
                    select: {
                        type: true,
                    },
                },
            },
        });
        res.status(200).send(ViewAllPrograms);

        // console.dir(ViewAllPrograms, { depth: null });
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error);
    }
};

export const CurrentProgramDetails = async (req, res) => {
    const findMaxProgrameId = await prisma.internship_program.aggregate({
        _max: {
            program_id: true,
        },

    });
    const max = findMaxProgrameId._max.program_id;
    const countOfStudents = await prisma.student.aggregate({
        where: {
            program_id: max,
        },
        _count: {
            program_id: true,
        }

    });


    try {
        const CurrentProgramDetails = await prisma.internship_program.findMany({
            where: {
                program_id: max,
            },
            select: {
                start_date: true,
                end_date: true,
                is_active:true,

                internship_program_status: {
                    select: {
                        type: true,
                    },
                },
            },



        });
        // const ar = CurrentProgramDetails;
        // CurrentProgramDetails.push(totalStudent._count);
        

        res.status(200).send([CurrentProgramDetails,countOfStudents._count]);

        // console.dir([CurrentProgramDetails,countOfStudents], { depth: null });
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error);
    }
};
