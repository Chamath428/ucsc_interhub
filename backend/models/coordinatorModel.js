import joi from 'joi';

export const coordinatorSchema = joi.object({
    title: joi.string().required(),
    body: joi.string().required(),
    type: joi.number().required(),
    email_address: joi.string().required(),
   

})

export const coordinatorPlacement = joi.object({
    start_date: joi.date().required(),
    email_address:joi.string().required(),

})

export const deactiveAccount = joi.object({
    email:joi.required(),

})
