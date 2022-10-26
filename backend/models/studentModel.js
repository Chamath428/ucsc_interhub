import joi from 'joi';

export const studentSchema = joi.object({
    index_number : joi.number().integer().min(5).required(),
    registration_number :joi.string().min(5).required(),
    name : joi.string().required(),
    degree : joi.number().required(),
    gpa : joi.string().required(),
    program_id : joi.number().required(),
})

export const studenteditProfileSchema = joi.object({
    index_number : joi.number().integer().min(5).required(),
    name : joi.string().required(),
    password : joi.string(),
    email : joi.string().email(),
    about_me : joi.string(),
    github : joi.string().uri(),
    facebook : joi.string().uri(),
    linkedin : joi.string().uri(),
})


export const studentappliedInternshipsSchema = joi.object({
    // index_number : joi.number().integer().required(),
    // addId : joi.number().integer().required(),
    // cv : joi.string().required(),
    // is_wish_list : joi.number().integer().required(),
    // comId : joi.number().integer().required()

})