import mongose from "mongoose";


export const connectDB=async()=>{
    try {
        await mongose.connect('mongodb://localhost/merndb')
        console.log('Db is connected')
    } catch (error) {
        console.log(Error)
    }
};
