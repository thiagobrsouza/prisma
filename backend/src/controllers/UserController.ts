import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const service = new UserService()

export class UserController {

  async create(req: Request, res: Response) {
    const { ...user } = req.body
    const newUser = await service.create({ ...user })
    return res.status(201).json(newUser)
  }

  async findAll(req: Request, res: Response) {
    const list = await service.findAll()
    return res.json(list)
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params
    const user = await service.findOne(+id)
    return res.json(user)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, email, password, notes, profileId } = req.body
    const user = await service.update(+id, { name, email, password, notes, profileId })
    return res.json(user)
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params
    return res.json(await service.remove(+id))
  }
}