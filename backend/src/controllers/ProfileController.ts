import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

const service = new ProfileService()

export class ProfileController {

  async findAll(req: Request, res: Response) {

  }

  async findOne(req: Request, res: Response) {

  }

}