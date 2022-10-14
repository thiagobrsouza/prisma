import { useRouter } from "next/router"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { http } from "../services/http"
import { Profile, User, useUserService } from "../services/UserService"

export function Form() {

  const router = useRouter()
  const { id: queryId } = router.query
  const service = useUserService()
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [user, setUser] = useState<User>({
    name: '', email: '', password: '', notes: '', profileId: {}
  })

  useEffect(() => {
    http.get('/profiles').then(response => {
      setProfiles(response.data)
    })
  }, [])

  useEffect(() => {
    if (queryId) {
      service.getOne(queryId).then((data) => {
        setUser({...data})
      })
    }
  }, [queryId])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUser({...user, [id]: value })
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target
    setUser({...user, [id]: parseInt(value) })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (user.id) {
      service.update({...user})
    } else {
      service.create({...user})
    }
  }

  return (
    <div className="mt-3 col-4">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control mb-3" id="name" value={user.name} onChange={handleInput} />

        <label htmlFor="email" className="form-label">E-mail</label>
        <input type="text" className="form-control mb-3" id="email" value={user.email} onChange={handleInput} />

        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control mb-3" id="password" value={user.password} onChange={handleInput} />

        <label htmlFor="profile" className="form-label">Profile</label>
        <select className="form-select mb-3" id="profileId" value={user.profileId} onChange={handleSelect}>
          <option>Select profile</option>
          {
            profiles.map((profile: Profile) => (
              <option key={profile.id} value={profile.id}>{profile.name}</option>
            ))
          }
        </select>

        <button type="submit" className="btn btn-primary col-12">
          { user.id ? "Update" : "Submit" }
        </button>

      </form>
    </div>
  )
}