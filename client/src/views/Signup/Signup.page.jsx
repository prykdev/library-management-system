

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


        <div className="back">
          <div className="text">
                <h1>Welcome to the family</h1>
                <p>let’s get you all set up so you can verify your4 personal account and begin settihng up your profile. </p>
            </div>
            <div className="Mid">

                <div className="image">
                 
                  
                </div>
                <div className="form">

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
                    <div>

                      <input type="checkbox" required />
                      <label>
                        I agree to the terms of service
                      </label>
                    </div>
                    <br />
                    <button  className ="btn"type='summit' onClick={clicked}>Create account</button>
                </div>
            </div>
        </div>
    )
}
