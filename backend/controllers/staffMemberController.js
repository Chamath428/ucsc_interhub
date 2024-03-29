import { PrismaClient } from '@prisma/client'
import { staffMemberSchema, staffMemberScheduleCompanyVisit } from '../models/staffMemberModel.js';

const prisma = new PrismaClient();

export const createStaffMember = async (req, res) => {
    console.log('create staff member');
    const { error, value } = staffMemberSchema.validate(req.body);
   

    if (!error) {

       
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash("password", salt);
        try {
            const staffMember = await prisma.pdc.create({
                data: {
                    email_address: req.body.email_address,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: hashPassword,
                    role: req.body.role,
                  
                }
            })

            res.status(200).send(staffMember);
            
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(500).send(error);
    }
}
export const ActiveRegisteredCompany = async (req, res) => {

    try {
        const activeRegisteredCompany = await prisma.company.findMany({
            where:
            {
                company_status: 2,
            },

            select: {
                company_id:true,
                name: true,
                date_of_establishment:true,
                description:true,
                website:true,
                address:true,
                fax_no:true,
                company_status_types:{
                    select:{
                        type:true,
                    },
                },
                no_of_employees:true,
                no_of_tech_leads:true,
                no_of_project_managers:true,
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

                company_status: 3,
            },
            company_id:true,
                name: true,
                date_of_establishment:true,
                description:true,
                website:true,
                address:true,
                fax_no:true,
                company_status_types:{
                    select:{
                        type:true,
                    },
                },
                no_of_employees:true,
                no_of_tech_leads:true,
                no_of_project_managers:true,
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
                company_id:true,
                name: true,
                date_of_establishment:true,
                description:true,
                website:true,
                address:true,
                fax_no:true,
                company_status_types:{
                    select:{
                        type:true,
                    },
                },
                no_of_employees:true,
                no_of_tech_leads:true,
                no_of_project_managers:true,
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
export const AcceptCompanyRequest = async (req,res)=>{
    
    try{
        const accept = await prisma.$queryRaw`UPDATE company SET company_status=2 WHERE company_id=${req.body.id}`

        res.status(200).send(confirmStatus);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
export const ActiveCompany = async (req, res) => {

    try {
        const ActiveCompany = await prisma.company.findMany({
            where: {
                company_status: 2,
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
                company_visit_id:true,
                company: {
                    select: {
                        name: true,

                    },
                },
                pdc: {
                    select: {
                        first_name: true,
                    },
                },
                date: true,

                start_time: true,
                company_visit_types: {
                    select: {
                        type: true,
                    },
                },
                company_visit_status_types: {
                    select: {
                        status: true,
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
export const FilterCompanyVisitByType = async (req, res) => {

    if (req.body.company_visit_type) {
        try {
            const FilterCompanyVisitByType = await prisma.company_visit.findMany({

                where: {
                    company_visit_type: req.body.company_visit_type
                },
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,

                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },


                }
            })
            res.status(200).send(FilterCompanyVisitByType);

            // console.dir(CompanyVisit, { depth: null })
        } catch (error) {
            res.status(400).send(error);
        }
    }
    else {
        try {
            const FilterCompanyVisitByType = await prisma.company_visit.findMany({
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,

                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },


                }
            })
            res.status(200).send(FilterCompanyVisitByType);

            // console.dir(CompanyVisit, { depth: null })
        } catch (error) {
            res.status(400).send(error);
        }
    }

}
export const FilterCompanyVisitByStatus = async (req, res) => {

    if (req.body.company_visit_status) {
        try {
            const FilterCompanyVisitByStatus = await prisma.company_visit.findMany({

                where: {
                    status: req.body.company_visit_status
                },
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,

                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },


                }
            })
            res.status(200).send(FilterCompanyVisitByStatus);

            // console.dir(CompanyVisit, { depth: null })
        } catch (error) {
            res.status(400).send(error);
        }
    }
    else {
        try {
            const FilterCompanyVisitByStatus = await prisma.company_visit.findMany({
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,

                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },


                }
            })
            res.status(200).send(FilterCompanyVisitByStatus);

            // console.dir(CompanyVisit, { depth: null })
        } catch (error) {
            res.status(400).send(error);
        }
    }

}
export const SortCompanyVisit = async (req, res) => {
    console.log(req.body.sort_data)
    if (req.body.sort_data == 1) {
        try {
            const SortCompanyVisit = await prisma.company_visit.findMany({
                orderBy: {
                    date: ("asc")
                },
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,

                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },


                }
            })
            res.status(200).send(SortCompanyVisit);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else if (req.body.sort_data == 2) {
        try {
            const SortCompanyVisit = await prisma.company_visit.findMany({
                orderBy: {
                    company: {
                        name: ("asc"),
                    },
                },
                select: {
                    company: {
                        select: {
                            name: true,

                        },
                    },
                    pdc: {
                        select: {
                            first_name: true,
                        },
                    },
                    date: true,
                    start_time: true,
                    company_visit_types: {
                        select: {
                            type: true,
                        },
                    },
                    company_visit_status_types: {
                        select: {
                            status: true,
                        },
                    },

                }
            })
            res.status(200).send(SortCompanyVisit);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

}
export const scheduleCompanyVisit = async (req, res) => {
    const { error, value } = staffMemberScheduleCompanyVisit.validate(req.body);

    if (!error) {
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash("password", salt); 
        try {
            const company_visit = await prisma.company_visit.create({
                data: {
                    company_id: req.body.company_id,
                    email_address: req.body.email_address,
                    date: req.body.date,
                    start_time: req.body.start_time,
                    company_visit_type: req.body.company_visit_type,
                    status: req.body.status
                }
            })

            res.status(200).send(company_visit);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    } else {
        console.log(error);
        res.status(500).send(error);
    }
}

export const AllStudents = async (req, res) => {

    try {
        const AllStudents = await prisma.student.findMany({
            select: {
                index_number: true,
                registration_number: true,
                name: true,
                student_degree: {
                    select: {
                        degree: true,
                    },
                },
                student_status_type: {
                    select: {
                        status: true,
                    },

                },
            }
        })
        res.status(200).send(AllStudents);
    } catch (error) {
        res.status(400).send(error);
    }

}
export const SelectedStudents = async (req, res) => {

    try {
        const SelectedStudents = await prisma.student.findMany({
            where: {
                student_status: 4,
            },
            select: {
                index_number: true,
                registration_number: true,
                name: true,
                student_degree: {
                    select: {
                        degree: true,
                    },
                },
                internships: {
                    select: {
                        company: {
                            select: {
                                name: true,
                            },
                        },
                        // job_role : true
                        job_roles: {
                            select: {
                                job_role: true,
                            },
                        },

                    },

                },

            },
        })
        res.status(200).send(SelectedStudents);
    } catch (error) {
        res.status(400).send(error);
    }

}
export const SearchAllStudentsByCourse = async (req, res) => {
    console.log(req.body.degree)
    if (req.body.degree) {
        try {
            const SearchAllStudentsByCourse = await prisma.student.findMany({
                where: {
                    degree: req.body.degree
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SearchAllStudentsByCourse);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else {
        try {
            const SearchAllStudentsByCourse = await prisma.student.findMany({

                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SearchAllStudentsByCourse);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }


}
export const SearchAllStudentsByEntrolled = async (req, res) => {
    console.log(req.body.student_status)
    if (req.body.student_status == 1) {
        try {
            const SearchAllStudentsByEntrolled = await prisma.student.findMany({
                where: {
                    student_status: 4,
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SearchAllStudentsByEntrolled);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else if (req.body.student_status == 2) {
        try {
            const SearchAllStudentsByEntrolled = await prisma.student.findMany({
                where:
                {
                    NOT: [
                        {
                            student_status: 4,
                        },
                    ],
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SearchAllStudentsByEntrolled);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else {
        try {
            const SearchAllStudentsByEntrolled = await prisma.student.findMany({

                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SearchAllStudentsByEntrolled);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

}

export const SortAllStudents = async (req, res) => {
    console.log(req.body.sort_data)
    if (req.body.sort_data == 1) {
        try {
            const SortAllStudents = await prisma.student.findMany({
                orderBy: {
                    index_number: ("asc")
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SortAllStudents);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else if (req.body.sort_data == 2) {
        try {
            const SortAllStudents = await prisma.student.findMany({
                orderBy: {
                    name: ("asc")
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    student_status_type: {
                        select: {
                            status: true,
                        },

                    },
                },
            })
            res.status(200).send(SortAllStudents);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

}
export const SelectedStudentsSearchByCourse = async (req, res) => {
    console.log(req.body.degree)
    if (req.body.degree) {
        try {
            const SearchSelectedStudentsByCourse = await prisma.student.findMany({
                where: {
                    AND: [{
                        student_status: 4,
                    },
                    {
                        degree: req.body.degree,
                    },],
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SearchSelectedStudentsByCourse);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else {
        try {
            const SearchSelectedStudentsByCourse = await prisma.student.findMany({

                where: {
                    student_status: 4,
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SearchSelectedStudentsByCourse);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }


}
export const SortSelectedStudents = async (req, res) => {
    console.log(req.body.sort_data)
    if (req.body.sort_data == 1) {
        try {
            const SortSelectedStudents = await prisma.student.findMany({
                orderBy:
                {
                    index_number: ("asc")
                },
                where: {
                    student_status: 4
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SortSelectedStudents);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else if (req.body.sort_data == 2) {
        try {
            const SortSelectedStudents = await prisma.student.findMany({
                orderBy: {
                    name: ("asc"),
                },
                where: {
                    student_status: 4,
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SortSelectedStudents);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

}
export const getJobRoles = async (req, res) => {
    try {
        const jobRoles = await prisma.job_roles.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        res.status(200).send(jobRoles);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
export const SelectedStudentsSearchByJobRole = async (req, res) => {
    console.log(req.body.jobRole)
    if (req.body.jobRole) {
        try {
            const SearchSelectedStudentsByJobRole = await prisma.student.findMany({
                where: {
                    AND: [{
                        student_status: 4,
                    },
                    {
                        internships: {
                            jobRoles: {
                                job_role: req.body.jobRole
                            },
                        },
                    },],
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SearchSelectedStudentsByJobRole);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    else {
        try {
            const SearchSelectedStudentsByJobRole = await prisma.student.findMany({

                where: {
                    student_status: 4,
                },
                select: {
                    index_number: true,
                    registration_number: true,
                    name: true,
                    student_degree: {
                        select: {
                            degree: true,
                        },
                    },
                    internships: {
                        select: {
                            company: {
                                select: {
                                    name: true,
                                },
                            },
                            // job_role : true
                            job_roles: {
                                select: {
                                    job_role: true,
                                },
                            },

                        },

                    },

                },
            })
            res.status(200).send(SearchSelectedStudentsByJobRole);
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }


}

export const completeVisit = async (req,res)=>{
    console.log(req.body.company_visit_id)
    try{
        // const confirmStatus = await prisma.company_visit.update({
        //     where:{
        //         company_visit_id:req.body.company_visit_id,
        //     },
        //     data:{
        //         status: 2
        //     }
            
        // });

        const confirmStatus = await prisma.$queryRaw`UPDATE company_visit SET status=2 WHERE company_visit_id=${req.body.company_visit_id}`

        res.status(200).send(confirmStatus);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const getProfileData = async (req, res) => {
    console.log(req.body.userId)
    try {
        const profileData = await prisma.pdc.findFirst({
            where: {
                email_address: req.body.userId,
            },
            select: {
                first_name: true,
                last_name: true,
                email_address: true,
                role : true
            }
        }
        );
        console.log(profileData)
        res.status(200).send(profileData);
    } catch (error) {
        // console.log(error);
        res.status(400).send(error);
    }
}

export const getAllAdvertiesments = async (req,res)=>{
    try{
        const advertiesments = await prisma.$queryRaw `SELECT advertisement.advertisement_id,
                                                              advertisement.title,
                                                              company.name,
                                                              job_roles.job_role,
                                                              advertisement_status.type,
                                                              advertisement_technologies.technologies
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
                                                              ON advertisement_technologies.advertisement_id = advertisement.advertisement_id
                                                        ORDER BY advertisement.advertisement_id DESC`;
        res.status(200).send(advertiesments)
    }catch(error){
        res.status(400).json({message:"Something went wrong when fetchingn the data!"})
    }
}
 