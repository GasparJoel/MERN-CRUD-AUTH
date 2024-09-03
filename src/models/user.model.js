    import mongoose, {model, Schema}  from "mongoose";
    const userSchema = Schema({
            username  :{
                type:String,
                required:true,
                trim:true
            },
            email :{
                 type:String,
                 required:true,
                 trim:true,
                 unique:true
                 
            },
            password :{
                type:String,
                required:true,

            }

    })

    export default mongoose.model('User',userSchema)