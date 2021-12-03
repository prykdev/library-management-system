import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
export const Login = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line
    const [email,setEmail] = useState('')
    // eslint-disable-next-line
    const [password,setPassword] = useState('')
    const signin =async()=>{
        navigate('/Home')
    }
    return (
        <div>
            <div className='form'>
                <label >Enter Email</label><br/>
                <input 
                type="email"
                 placeholder= 'email'
                onChange={e=>setEmail(e.target.value)}
                 /><br/>
                 <label >Password</label><br/>
                <input 
                type="password"
                 placeholder= 'password'
                 onChange = {e=>setPassword(e.target.value)}
                 /><br/>
                 <button type="summit"  onClick={signin}> Login</button>
            </div>
            
        </div>
    )
}
