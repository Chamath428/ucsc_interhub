import joi from 'joi';

export const organizationSchema = joi.object({
    name : joi.string().required(),
    registration_number :joi.string().required(),
    date_of_establishment : joi.string().required(),
    website : joi.string().required(),
    address : joi.string().required(),
    no_of_employees : joi.number().required(),
    no_of_project_managers : joi.number().required(),
    no_of_tech_leads : joi.number().required(),
    is_registered_other_uni : joi.number().required(),
    password : joi.string().required().min(5),
    username : joi.string().required()
})