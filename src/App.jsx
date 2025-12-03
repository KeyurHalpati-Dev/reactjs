import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

   useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users')
        setUsers(response.data.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } 
    }

    fetchUsers()
  }, []) 

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
      <h1>Hey programmer😎🤹‍♀️</h1>
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
