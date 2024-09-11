import { Router  } from "express";

import { authRequired } from "../middlewares/ValidateToken.js";

const router = Router();

router.get('/task',authRequired,(req,res)=>res.send('Hola task'))


export default router