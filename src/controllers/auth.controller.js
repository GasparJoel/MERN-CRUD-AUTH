
import  User  from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async(req,res)=>{
    const {email,password,username} = req.body

   try {
    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Creación del nuevo usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // Guardar usuario en la base de datos
    const userSaved = await newUser.save();

    //Para el token 
    const   token  =  await createAccessToken({id:userSaved._id})
    //Guardamos en una cookie
  res.cookie('token',token)
 // Respuesta exitosa
    return res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt:userSaved.createdAt,
      updatedAt:userSaved.updatedAt,
    });
   } catch (error) {
   res.status(500).json({message :error.message})
   }
   
}

export const login = (req,res)=>{
    res.send('login')
}