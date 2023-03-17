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
                <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-MAIL" variant="outlined" />
                <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" />
                <input type="submit" />

            </form>
        </div>

    );
};

export default LoginPage;