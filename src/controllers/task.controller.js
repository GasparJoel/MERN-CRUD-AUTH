import Task  from "../models/task.model.js";

export const getTasks = async(req,res) =>{
    //Traemos las tareas que pertenecen al usuario
    try {
        const tasks = await Task.find({
            user : req.user.id 
        }).populate('user')
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }

   
}
export const createTask = async(req,res) =>{

    try {
     const {title,descripcion} = req.body  
    const newTask = new Task({
        title,
        descripcion,
        user : req.user.id
    })
    const TaskSave = await newTask.save()

    res.json(TaskSave)
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
      


}
export const getTask = async(req,res) =>{
  
   try {
    const TaskFound =  await Task.findById(req.params.id).populate('user')
    if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
        return res.status(201).json(TaskFound)
   } catch (error) {
      return res.status(404).json({message:"Task Not Found"})
    
   }
}

export const deleteTask = async(req,res) =>{

    try {
     const TaskFound =  await Task.findByIdAndDelete(req.params.id)
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({message:"Task Not Found"})
    }
}
export const updateTask = async(req,res) =>{
    
    try {
     const TaskFound =  await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.status(201).json(TaskFound)
    } catch (error) {
        return res.status(404).json({message:"Task Not Found"})
    }
}