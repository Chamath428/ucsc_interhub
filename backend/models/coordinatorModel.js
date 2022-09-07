import joi from 'joi';

export const coordinatorSchema = joi.object({
    email_address: joi.string(),
    
})