import joi from 'joi';

export const supervisorSchema = joi.object({
    name:joi.string(),
    email :joi.string().email().required(),
    company_id:joi.number().required()
})