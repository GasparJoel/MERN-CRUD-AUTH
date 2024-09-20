import { Router  } from "express";

import { authRequired } from "../middlewares/ValidateToken.js";
import * as TaskController from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/Validator.middleware.js";
import { createSchema } from "../schemas/task.schema.js";

const router = Router();

router.get('/task',authRequired,TaskController.getTasks)
router.post('/task',validateSchema(createSchema),authRequired,TaskController.createTask)
router.delete('/task/:id',authRequired,TaskController.deleteTask)
router.get('/task/:id',authRequired,TaskController.getTask)
router.put('/task/:id',authRequired,TaskController.updateTask)


export default router