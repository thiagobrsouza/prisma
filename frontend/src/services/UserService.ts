import { http } from "./http";

export interface User {
  id?: any;
  name?: string;
  email?: string;
  password?: string;
  notes?: string;
  profileId?: any;
  profile?: Profile;
}

export interface Profile {
  id?: any;
  name?: string;
}

export const useUserService = () => {

  const create = async (user: User) => {
    await http.post('/users', user).then(response => {
      alert('Successfully')
    }).catch((error: any) => {
      alert(error.response)
    })
  }

  const getOne = async (id: any) => {
    const response = await http.get(`/users/${id}`)
    return response.data
  }

  const update = async (user: User) => {
    await http.patch(`/users/${user.id}`, user).then(response => {
      alert('Updated!')
    }).catch((error: any) => {
      alert(error.response)
    })
  }
  
  return {
    create,
    getOne,
    update
  }
}