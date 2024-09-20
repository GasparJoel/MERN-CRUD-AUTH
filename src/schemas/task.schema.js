import {  z } from "zod";

export const createSchema = z.object({
    title : z.string({
        required_error:"title is required"
    })  ,
    descripcion : z.string({
        required_error: "descripcion is required"
    }),
    date:z.string().datetime().optional()
})