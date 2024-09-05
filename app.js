import express from 'express'  

import  morgan  from "morgan";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();
app.use(express.json())
app.use(morgan('dev'))

//agregamos las rutas
app.use("/api",authRoutes)



 export default app ;