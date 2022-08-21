import joi from 'joi';

export const studentSchema = joi.object({
    index_number : joi.number().integer().min(5).required(),
    registration_number :joi.string().min(5).required(),
    name : joi.string().required(),
    degree : joi.number().required(),
    gpa : joi.string().required(),
    program_id : joi.number().required(),
    cv : joi.required()
})