import type { NextPage } from 'next'
import Link from 'next/link'
import { Table } from '../components/Table'

const Home: NextPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <Link href="/add">
          <button className="col-2 btn btn-success mb-3">New User</button>
        </Link>
        <hr />
        <h4 className="mt-4 text-center">All users</h4>
        <Table />
      </div>
    </div>
  )
}

export default Home
