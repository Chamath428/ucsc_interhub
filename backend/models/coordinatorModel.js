import joi from 'joi';

export const coordinatorSchema = joi.object({
    title: joi.string().required(),
    body: joi.string().required(),
    type: joi.number().required(),
    email_address: joi.string().required(),



})