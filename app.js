import express from 'express'  

import  morgan  from "morgan";
import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js";
import  cookieParser  from "cookie-parser";
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
//agregamos las rutas
app.use("/api",authRoutes)
app.use('/api',taskRoutes)



 export default app ;