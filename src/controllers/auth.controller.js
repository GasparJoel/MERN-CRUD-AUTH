
import  User  from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async(req,res)=>{
    const {email,password,username} = req.body
   try {

   //VALIDACION DEL USUARIO
   const userFound = await User.findOne({email})
   if (userFound) return res.status(400).json({message:['the email is already is use']})

    // Hash incriptación  de la contraseña
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
   res.status(500).json({messagegit  :error.message})
   }
   
}

export const login = async(req,res)=>{
  const {email,password} = req.body

 try {
  //buscar al usuario 
 const UserFound = await User.findOne({email})
  //No encontrado
 if(!UserFound) return res.status(400).json({message:"Usern not found"})
  // Comparamos con el usuario encontrado 
  const isMatch = await bcrypt.compare(password, UserFound.password);
  //Si no coincide  el password 
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

export const profile = async(req,res)=>{
  try {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message:"User not found"})
    
      return res.json({
        id:userFound.id,
        username :userFound.username,
        email : userFound.email,
        createdAt:userFound.createdAt,
        updatedAt:userFound.updatedAt
      })
  } catch (error) {
    
  }
  res.send('profile')
  
}