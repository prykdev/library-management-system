import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import '../../components/Style/Signup.style.css'
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
            <div className="text">
                <h1>Welcome to the family</h1>
                <p>let’s get you all set up so you can verify your4 personal account and begin settihng up your profile. </p>
            </div>
            <div className="image">
                <img src="../../layout/img.png" alt=""/>
            </div>
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
