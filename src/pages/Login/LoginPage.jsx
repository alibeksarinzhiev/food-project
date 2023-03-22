import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/reducer/userSlice';

import TextField from '@mui/material/TextField';

import './LoginPage.scss'

const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    const postUser = (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        axios
            .post('http://localhost:8080/login', user)
            .then(({data}) => {
                setEmail("")
                setPassword("")
                setUser(data.user)
                dispatch(loginSuccess(data.user))
            })
    }


    return (

        <div className='register__wrapper'>

            <form onSubmit={postUser}>

                <h1>Login</h1>
                <div className="input-container">
                <TextField className='email-login'  type="email" value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-MAIL" variant="outlined" />

                <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
          </div>

          <div class="input-container">
          <TextField className='password-login' type="password" value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" />

          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
        </div>


               
        
        {/* регистрация кнопка*/}
                <input className='form-sumbit-input' type="submit" />
                     <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>

            </form>

          </div>

    );
};

export default LoginPage;