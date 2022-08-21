import joi from 'joi';

const userSchema = joi.object({
    username:joi.string().min(3).max(6)
})

export const sayHello = async (req,res)=>{
    const {error,value} = userSchema.validate(req.body);
    if(error)res.status(500).send(error);
    else res.send("no erors")
}