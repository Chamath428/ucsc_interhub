import { coordinatorSchema, coordinatorPlacement, deactiveAccount, pharse } from "../models/coordinatorModel.js";
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
                email_address: true,
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
                program_id: true,
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
                is_active: true,

                internship_program_status: {
                    select: {
                        type: true,
                    },
                },
            },



        });
        // const ar = CurrentProgramDetails;
        // CurrentProgramDetails.push(totalStudent._count);


        res.status(200).send([CurrentProgramDetails, countOfStudents._count]);

        // console.dir([CurrentProgramDetails,countOfStudents], { depth: null });
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error);
    }
};



export const createNewPlacementPrograme = async (req, res) => {

    var status = 1;
    var is_active = 1;
    const { error, value } = coordinatorPlacement.validate(req.body);
    // console.log(value);
    //    console.log(error);

    if (!error) {


        try {

            const updatePlacementActivity = await prisma.internship_program.updateMany({
                where: {
                    is_active: 1,
                },
                data: {
                    is_active: 0,
                },
            });
            const createNewPlacementPrograme = await prisma.internship_program.create({
                data: {
                    start_date: req.body.start_date,
                    status: status,
                    is_active: is_active,
                    email_address: req.body.email_address,

                },
            });

            res.status(200).send(createNewPlacementPrograme);
        } catch (error) {
            res.status(500).send(error);
        }
    } else {

        res.status(500).send(error);
    }
};


export const endCurrentPrograme = async (req, res) => {


    try {

        const endCurrentPrograme = await prisma.internship_program.updateMany({
            where: {
                is_active: 1,
            },
            data: {
                is_active: 0,
            },
        });


        res.status(200).send(endCurrentPrograme);
    } catch (error) {
        res.status(400).send(error);
    }

};


export const homeCardDetails = async (req, res) => {
    const findMaxProgrameId = await prisma.internship_program.aggregate({
        _max: {
            program_id: true,
        },

    });
    const max = findMaxProgrameId._max.program_id;
    const countActiveCompany = await prisma.company.aggregate({
        where: {
            company_status: 2,
        },
        _count: {
            company_id: true,
        },
    });
    const countStudent = await prisma.student.aggregate({
        where: {
            program_id: max,
        },
        _count: {
            index_number: true,
        },
    });

    try {

        const countAnnousment = await prisma.announcement.aggregate({

            _count: {
                announcement_id: true,
            },
        });

        res.status(200).send([{ announcement_id: countAnnousment._count.announcement_id, company_id: countActiveCompany._count.company_id, index_number: countStudent._count.index_number }]);
        // console.log({announcement_id:countAnnousment._count.announcement_id,company_id:countActiveCompany._count.company_id,index_number:countStudent._count.index_number})
    } catch (error) {
        res.status(400).send(error);
    }

};



export const deactiveAccounts = async (req, res) => {

    const { error, value } = deactiveAccount.validate(req.body);


    if (!error) {
        try {
            const deactiveAccounts = await prisma.pdc.updateMany({
                where: {
                    email_address: value.email,
                },
                data: {
                    is_active: 0,
                },
            });

            res.status(200).send(deactiveAccounts);
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(500).send(error);
    }


};




export const goPhase = async (req, res) => {


    const { error, value } = pharse.validate(req.body);


    if (!error) {

        try {

            const updatePharse = await prisma.internship_program.updateMany({
                where: {
                    is_active: 1,
                },
                data: {
                    status: req.body.phase,
                },
            });


            res.status(200).send(updatePharse);
        } catch (error) {

            res.status(500).send(error);
        }
    } else {

        res.status(500).send(error);
    }
};



export const getChartData = async (req, res) => {


    try {
        const CsStudent1 = await prisma.student.aggregate({

            where: {
                degree: 1,
            },
            _count: {
                index_number: true,
            },
        });
        const CsStudent2 = await prisma.student.aggregate({

            where: {
                degree: 3,
            },
            _count: {
                index_number: true,
            },
        });
        const totalCsStudent = CsStudent1._count.index_number + CsStudent2._count.index_number;


        const SelectedCsStudent1 = await prisma.student.aggregate({
            where: {
                student_status: 4,
                degree: 1,
            },
            _count: {
                index_number: true,
            },
        });
        const SelectedCsStudent2 = await prisma.student.aggregate({
            where: {
                student_status: 4,
                degree: 3,
            },
            _count: {
                index_number: true,
            },
        });

        const totalSelectedCsStudent = SelectedCsStudent1._count.index_number + SelectedCsStudent2._count.index_number;


        const IsStudent1 = await prisma.student.aggregate({

            where: {
                degree: 2,
            },
            _count: {
                index_number: true,
            },
        });
        const IsStudent2 = await prisma.student.aggregate({

            where: {
                degree: 4,
            },
            _count: {
                index_number: true,
            },
        });
        const totalIsStudent = IsStudent1._count.index_number + IsStudent2._count.index_number;


        const SelectedIsStudent1 = await prisma.student.aggregate({
            where: {
                student_status: 4,
                degree: 2,
            },
            _count: {
                index_number: true,
            },
        });
        const SelectedIsStudent2 = await prisma.student.aggregate({
            where: {
                student_status: 4,
                degree: 4,
            },
            _count: {
                index_number: true,
            },
        });

        const totalSelectedIsStudent = SelectedIsStudent1._count.index_number + SelectedIsStudent2._count.index_number;
        const noOfAllStudent= totalIsStudent+ totalCsStudent;
        const noOfSelectedStudent= totalSelectedCsStudent+ totalSelectedIsStudent;


        res.status(200).send([{ totalCsStu: totalCsStudent,totalSelectedCsStu:totalSelectedCsStudent,  totalIsStu: totalIsStudent,totalSelectedIsStu:totalSelectedIsStudent,totalStudent: noOfAllStudent,totalSelectedStu:noOfSelectedStudent}]);
        // console.log({SelectedCsStudent:SelectedCsStudent._count.index_number})
        // console.log([{ totalCsStu: totalCsStudent,totalSelectedCsStu:totalSelectedCsStudent,  totalIsStu: totalIsStudent,totalSelectedIsStu:totalSelectedIsStudent,totalStudent: noOfAllStudent,totalSelectedStu:noOfSelectedStudent}])
    } catch (error) {

        res.status(500).send(error);
    }

};
