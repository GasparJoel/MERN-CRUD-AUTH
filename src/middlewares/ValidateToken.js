import jwt from "jsonwebtoken";
import  {TOKEN_SECRET}  from "../../config.js";

//Funcion para el uso obligatorio de token
export const  authRequired = (req,res,next)=>{

    const {token} =  req.cookies
    if(!token)
         return res.status(401).json({message: "No token, autorization denied"})

    jwt.verify(token,TOKEN_SECRET,(err,user)=>{
        if (err) return res.status(403).json({message:"Invalid Token"});
         //Guardamos el user en el req
        req.user = user
        next()
    })
    
}