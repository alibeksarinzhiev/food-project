import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.scss'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const RegisterPage = ({opneModal, setOpenModal}) => {

    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [err, setErr] = useState("")
    const [password, setPassword] = useState("")
    

    const handleClose = () => setOpenModal(false);

    const postUser = (e) => {
        e.preventDefault()
        setErr("")

        if(login.length === 0) {
            setErr("Please vaild Login")
        }

        console.log(err)

        const user = {
            email,
            login,
            password
        }

        axios
            .post('http://localhost:8080/users', user)
            .then(res => {
                setEmail("")
                setLogin("")
                setPassword("")
                setOpenModal(false)
            })
            .catch(err => console.log(err))
    }

    return (


        <Modal
            open={opneModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='register__wrapper'>

                <form onSubmit={postUser}>

                    <h1>Register</h1>
                    <div className="input-container">
                    <TextField  className='email-login' type="email" value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-MAIL" variant="outlined" />
                <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
          </div>

                    <TextField className='login-register'  type="text" value={login} onChange={e => setLogin(e.target.value)} id="outlined-basic" label="LOGIN" variant="outlined" />
                  
                    <div class="input-container">
                    <TextField className='password-login' type="password" value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" />
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
        </div>
                    
                 
                 
                   {/* кнопка войти */}
                    <input className='form-sumbit-input'  type="submit" />
                    <div class="form-section">
  <p>Have an account? <a href="">Log in</a> </p>
</div>

                </form>
            </div>

        </Modal>


    );
};

export default RegisterPage;