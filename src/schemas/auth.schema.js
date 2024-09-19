import { z } from "zod";

//schema para poder  validar el registro
export const registerSchema = z.object({
username :z.string({
    required_error:'Username is Required'
}),
email :z.string({
    required_error:'Email is Required'
}).email({
    message:'Invalid email'
}),
password:z.string({
    required_error:'password is Required'
}).min(6,{
    message:'Password must be at least 6 characters'
})
})

//schem para poder validar el login 

export const loginSchema = z.object({
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    }),

    password:z.string({
        required_error:"Password is required "
    }).min(6,{
            message:'Pasword must be at least 6 characters'
    })
})