import joi from 'joi';

export const staffMemberSchema = joi.object({
    email_address : joi.string().email().required(),
    first_name :joi.string().required(),
    last_name : joi.string().required(),
    role : joi.number().required()
})