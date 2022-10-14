import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

const service = new ProfileService()

export class ProfileController {

  async findAll(req: Request, res: Response) {
    const list = await service.findAll()
    return res.status(200).json(list)
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params
    const profile = await service.findOne(+id)
    return res.status(200).json(profile)
  }

}