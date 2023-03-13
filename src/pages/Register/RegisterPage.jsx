import React, { useState } from 'react';
import './RegisterPage.scss'
import TextField from '@mui/material/TextField';
import axios from 'axios';

const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const postUser = (e) => {
        e.preventDefault()

        const user = {
            email,
            login,
            password
        }

        axios.post('http://localhost:8080/users', user)
            .then(res => {
                setEmail("")
                setLogin("")
                setPassword("")
            })
            .catch(err => console.log(err))
    }

    return (

        <div className='register__wrapper'>

            <form onSubmit={postUser}>

                <h1>Register</h1>
                <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-MAIL" variant="outlined" />
                <TextField type="text" value={login} onChange={e => setLogin(e.target.value)} id="outlined-basic" label="LOGIN" variant="outlined" />
                <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" />
                <input type="submit" />

            </form>
        </div>

    );
};

export default RegisterPage;