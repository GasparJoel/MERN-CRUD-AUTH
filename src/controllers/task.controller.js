import Task  from "../models/task.model.js";

export const getTasks = async(req,res) =>{
    //Traemos las tareas que pertenecen al usuario

    const tasks = await Task.find({
        user : req.user.id 
    }).populate('user')
    res.json(tasks)

    // const tasks = await Task.find({
    //     user:req.user.id
    // })
    // res.json(tasks)
}
export const createTask = async(req,res) =>{
      const {title,descripcion} = req.body  
    const newTask = new Task({
        title,
        descripcion,
        user : req.user.id
    })
    const TaskSave = await newTask.save()

    res.json(TaskSave)


}
export const getTask = async(req,res) =>{
   const TaskFound =  await Task.findById(req.params.id).populate('user')


   try {
    if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
        return res.status(201).json(TaskFound)
   } catch (error) {
      return res.json(error)
   }
}

export const deleteTask = async(req,res) =>{
    const TaskFound =  await Task.findByIdAndDelete(req.params.id)


    try {
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.sendStatus(204)
    } catch (error) {
       return res.json(error)
    }
}
export const updateTask = async(req,res) =>{
    const TaskFound =  await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    try {
     if(!TaskFound) return res.status(404).json({message:"No ha sido encontrado"})
         return res.status(201).json(TaskFound)
    } catch (error) {
       return res.json(error)
    }
}