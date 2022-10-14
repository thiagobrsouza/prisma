import Link from "next/link"
import { Form } from "../components/Form"

function Add() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <Link href="/">
          <button className="col-2 btn btn-success mb-3">All users</button>
        </Link>
        <hr />
        <h4 className="mt-4 text-center">Register/update an user</h4>
        <Form />
      </div>
    </div>
  )
}

export default Add