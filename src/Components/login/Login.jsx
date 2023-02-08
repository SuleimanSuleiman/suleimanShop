import React, { useContext, useRef, useState } from 'react'
import "./Login.css"
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.jsx';


export default function Login() {

  const [user, setUser] = useState({
    name: 'suleiman',
    age: 12
  })

  const auth = useAuth();
  const theName = useRef(null)
  const theAge = useRef(null)

  const HandleLogin = () => {
    auth.login(user)
    Navigate("/")
  }
  return (
    <div>
      <div className="containerCom">
        <div className="containerLogin">
          <div className="title">
            <p>Login</p>
          </div>
          <div className="name">
            <label htmlFor="loginInput">Your Name</label>
            <input ref={theName} type="text" id='loginInput' />
          </div>
          <div className="name">
            <label htmlFor="loginInput">Your Age</label>
            <input ref={theAge} type="text" id='loginInput' />
          </div>
          <div className="loginDiv">
            <button className='Login' onClick={HandleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
