import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/ValidateToken.js";

const router = Router()

//Rutas 
router.post('/register',authController.register)
router.post('/login',authController.login)
router.post('/logout',authController.logout)
router.get('/profile',authRequired,authController.profile)

export default router 