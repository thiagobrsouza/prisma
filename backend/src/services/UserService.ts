import { prisma } from "../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  profileId: any;
  notes: string;
}

export class UserService {

  async create(user: UserRequest) {
    const { name, email, password, profileId, notes } = user
    const userExists = await prisma.user.findUnique({
      where: { email: email }
    })
    if (userExists) {
      throw new Error('User already exists')
    }
    return await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        notes: notes,
        profile: {
          connect: {
            id: profileId
          }
        }
      },
      include: { profile: true }
    })
  }

  async findAll() {
    return await prisma.user.findMany({
      include: { profile: true }
    })
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: {
        profile: true
      }
    })
    return user
  }

  async update(id: number, user: UserRequest) {
    const { name, email, password, profileId, notes } = user
    const userFounded = await prisma.user.findUnique({
      where: { id: id }
    })
    const userExists = await prisma.user.findUnique({
      where: { email: email }
    })
    if (userExists && userExists.id !== userFounded?.id) {
      throw new Error('User already exists')
    }
    return await prisma.user.update({
      where: { id: id },
      data: {
        name: name,
        email: email,
        password: password,
        notes: notes,
        profile: {
          connect: {
            id: profileId
          }
        }
      },
      include: { profile: true }
    })
  }

  async remove(id: number) {
    try {
      await prisma.user.delete({
        where: { id: id }
      })
    } catch {
      throw new Error('Not allowed')
    }
  }

}