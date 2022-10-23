import joi from 'joi';

export const organizationSchema = joi.object({
    name : joi.string().required(),
    registration_number :joi.string().required(),
    date_of_establishment : joi.string().required(),
    address : joi.string().required(),
    telephone_no:joi.number().required().min(6),
    fax_no:joi.number(),
    partners:joi.allow(),
    client:joi.allow(),
    website : joi.string().required(),
    description:joi.string(),
    primaryContactName:joi.string().required(),
    email:joi.string().required().email(),
    mobile_no:joi.number().min(6),
    landline_no:joi.allow(),
    no_of_employees : joi.number().required(),
    no_of_project_managers : joi.number().required(),
    no_of_tech_leads : joi.number().required(),
    password : joi.string().required().min(5),
    username : joi.string().required(),
    confirm_password:joi.string().required(),
    is_registered_other_uni : joi.number().required()
})

export const createAdvertiesmentSchema = joi.object({
    title:joi.string().required(),
    jobCategory:joi.number().required(),
    vacancies:joi.number().required(),
    description:joi.string().required(),
    technologies:joi.allow(),
    videoUrl:joi.allow(),
    companyId:joi.number().required()
})