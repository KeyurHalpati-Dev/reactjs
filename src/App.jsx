import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    const response = await axios.get('http://backend-app:3000/api/users')

    setUsers(response.data.data)
  }

  fetchUsers()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hey ankit😎</h1>
      <div className="card">
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>City: {user.city}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
