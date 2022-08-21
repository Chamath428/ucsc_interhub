import joi from 'joi';

export const staffMemberSchema = joi.object({
    email_address : joi.string().email().required(),
    first_name :joi.string().required(),
    last_name : joi.string().required(),
    password : joi.string().required().min(5),
    role : joi.number().required()
})