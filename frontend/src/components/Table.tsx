import Router from "next/router"
import { useEffect, useState } from "react"
import { http } from "../services/http"
import { User } from "../services/UserService"

export function Table() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    http.get('/users').then(response => {
      setUsers(response.data)
      console.log(response.data)
    })
  }, [])

  function selectUser(user: User) {
    const url = `/add?id=${user.id}`
    Router.push(url)
    console.log(user)
  }

  return (
    <div className="mt-5 col-8">
      <table className="table table-responsive table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Profile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.profile?.name}</td>
                <td>
                  <button className="btn btn-info" onClick={e => selectUser(user)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}