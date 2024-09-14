import mongoose,{ Schema, Types } from "mongoose";

const  TaskSchema = new Schema({
       title :{
         type :String,
         required:true
       },
       descripcion:{
        type:String,
        required:true,
       },
      date:{
        type:Date,
        default:Date.now,
      }
     
},{
    timestamps:true
})

export default mongoose.model('Task',TaskSchema)