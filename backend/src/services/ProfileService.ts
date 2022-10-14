import { prisma } from "../prisma";

export class ProfileService {

  async findAll() {
    return await prisma.profile.findMany()
  }

  async findOne(id: number) {
    const profile = await prisma.profile.findUnique({
      where: { id: id }
    })
    return profile
  }

}