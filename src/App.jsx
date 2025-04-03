
import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './components/login'
import { isAuthenticated } from './utils/auth'

function App() {

  const [ auth, setAuth ] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) setAuth(true)
  }, [])

  return (
    <div className="">
      {auth ? <Dashboard /> : <Login onLogin={() => setAuth(true)}/>} 
    </div>
  )
}

export default App
