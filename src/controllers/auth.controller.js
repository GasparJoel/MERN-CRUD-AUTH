
import  User  from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

    // Respuesta exitosa
    return res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
   } catch (error) {
    console.log(error)
   }
   
}

export const login = (req,res)=>{
    res.send('login')
}