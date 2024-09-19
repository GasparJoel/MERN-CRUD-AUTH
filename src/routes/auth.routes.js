import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/ValidateToken.js";
import { validateSchema } from "../middlewares/Validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router()

//Rutas 
router.post('/register', validateSchema(registerSchema), authController.register)
router.post('/login',validateSchema(loginSchema),authController.login)
router.post('/logout',authController.logout)
router.get('/profile',authRequired,authController.profile)

export default router 