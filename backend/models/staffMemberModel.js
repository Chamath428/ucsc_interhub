import joi from 'joi';

export const staffMemberSchema = joi.object({
    email_address : joi.string().email().required(),
    first_name :joi.string().required(),
    last_name : joi.string().required(),
    role : joi.number().required()
})


export const staffMemberScheduleCompanyVisit =joi.object({
    company_id : joi.number().required(),
    email_address : joi.string().email().required(),
    date :joi.date().required(),
    start_time: joi.string(),
    company_visit_type : joi.number().required()
})