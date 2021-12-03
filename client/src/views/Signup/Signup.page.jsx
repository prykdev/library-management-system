

import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
export const Signup = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line
     const [email, setEmail] = useState('')
     // eslint-disable-next-line
    const [password, setPassword] = useState('')
    // eslint-disable-next-line
    const [name, setName] = useState('')
    const clicked = async()=>{
        navigate("/Login");
    }
    return (


        <div>
            <label>Name</label>
              <br />
              <input type="name"
                placeholder="Your Name"
                onChange={e => setName(e.target.value)}
              />
              <br />
              <label>Enter Email</label>
              <br />
              <input type="email"
                placeholder="Your email"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <br />
              <label>Enter Password</label>
              <br />
              <input
                type="password"
                placeholder="At least 8 Characters"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <br />
              <br />
              <input type="checkbox" required />
              <label>
                I agree to the terms of service
              </label>
              <br />
              <button type='summit' onClick={clicked}>Signup</button>
        </div>
    )
}
