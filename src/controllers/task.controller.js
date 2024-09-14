import Task  from "../models/task.model.js";

export const getTasks = async(req,res) =>{
    const tasks = await Task.find()
    res.json(tasks)
}
export const createTask = async(req,res) =>{
    const {title ,descripcion} = req.body
    const newTask = new Task({
        title,
        descripcion
        
    })
    const TaskSave = await newTask.save()
    res.json(TaskSave)
}
export const getTask = async(req,res) =>{
   const TaskFound =  await Task.findById(req.params.id)


   try {
    if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
        return res.status(201).json(TaskFound)
   } catch (error) {
      return res.json(error)
   }
}

export const updateTask = async(req,res) =>{
    const TaskFound =  await Task.findByIdAndDelete(req.params.id)


    try {
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.status(201).json(TaskFound)
    } catch (error) {
       return res.json(error)
    }
}
export const deleteTask = async(req,res) =>{
    const TaskFound =  await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    try {
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.status(201).json(TaskFound)
    } catch (error) {
       return res.json(error)
    }
}