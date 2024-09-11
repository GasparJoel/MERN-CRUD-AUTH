
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

export const login = async(req,res)=>{
  const {email,password} = req.body


 try {
//buscar al usuario 
 const UserFound = await User.findOne({email})

 //Sien caso no se econtro
 if(!UserFound) return res.status(400).json({message:"Usern not found"})

  // Comparamos con el usuario encontrado 
  const isMatch = await bcrypt.compare(password, UserFound.password);


  //Si no coincidieron  el password 
  if (!isMatch) return res.status(400).json({message:"Incorrect password"})


  //Para el token 
  const   token  =  await createAccessToken({id:UserFound._id})
    //Guardamos en una cookie
  res.cookie('token',token)
  // Respuesta exitosa
  return res.status(201).json({
    id: UserFound._id,
    username: UserFound.username,
    email: UserFound.email,
    createdAt:UserFound.createdAt,
    updatedAt:UserFound.updatedAt,
  });
 } catch (error) {
 res.status(500).json({message :error.message})
 }
 
}

export const logout = async(req,res)=>{
  res.cookie('token',"",{
    expires:new Date(0) // Expira la cookie de inmediato
  })
  return res.status(200).send('Logout successfull')
}