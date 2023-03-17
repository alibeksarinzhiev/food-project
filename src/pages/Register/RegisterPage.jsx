import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.scss'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const RegisterPage = ({opneModal, setOpenModal}) => {

    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    

    const handleClose = () => setOpenModal(false);

    const postUser = (e) => {
        e.preventDefault()

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
                    <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="E-MAIL" variant="outlined" />
                    <TextField type="text" value={login} onChange={e => setLogin(e.target.value)} id="outlined-basic" label="LOGIN" variant="outlined" />
                    <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="PASSWORD" variant="outlined" />
                    <input type="submit" />

                </form>
            </div>

        </Modal>


    );
};

export default RegisterPage;