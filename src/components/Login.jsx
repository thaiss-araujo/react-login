import { useState } from "react"
import { login } from "../utils/auth"

export default function Login({ onLogin }) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        if(login(email, password)) {
            localStorage.setItem('auth', 'true')
            onLogin()
        } else{
            alert('email ou senha inválidos')
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}