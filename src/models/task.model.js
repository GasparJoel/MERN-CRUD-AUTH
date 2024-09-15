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
      },
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
      }
     
},{
    timestamps:true
})

export default mongoose.model('Task',TaskSchema)