import { Router } from "express";
import { ProfileController } from "./controllers/ProfileController";
import { UserController } from "./controllers/UserController";

export const routes = Router()

/**
 * profiles routes
 */
routes.get('/profiles', new ProfileController().findAll)
routes.get('/profiles/:id', new ProfileController().findOne)

/**
 * users routes
 */
routes.post('/users', new UserController().create)
routes.get('/users', new UserController().findAll)
routes.get('/users/:id', new UserController().findOne)
routes.patch('/users/:id', new UserController().update)
routes.delete('/users/:id', new UserController().remove)