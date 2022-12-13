import './LoginModal.scss'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import closeIcon from '../../assets/Images/Icons/close-icon.svg';

function LoginModal({ loginOpen, setLoginOpen, setSignUpOpen, loginSuccess, setloginSuccess }) {

    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

    const navigate = useNavigate();

    const [emptyField, setEmptyField] = useState(false);
    const [wrongCred, setWrongCred] = useState(false);

// Responses for login errors
    const loginResponse = () => {
        if(emptyField) {
            return "All fields must be filled"
        } if(wrongCred) {
            return "Wrong credentials, invalid username or password"
        }if(loginSuccess) {
            return "Successful Login!, redirecting to main page..."
        }
    };

// Handle login submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!e.target.username.value || !e.target.password.value) { // Validate no empty fields
            return setEmptyField(true)
        }
        axios.post(`${API_URL}${PORT}/login`, {
            username: e.target.username.value,
            password: e.target.password.value
        })
        .then((response) => {
            sessionStorage.setItem('JWTtoken', response.data.token);
            setloginSuccess(true)
            // setTimeout(() => {
                navigate('/ingredients')
            // }, 3000)
        })
        .catch((err) => {
            if(err.response.data.token == null) { // Check if password correct from DB
                setWrongCred(true)
            }
        })
    }

// Reset err message
    const handleReset = () => {
        setEmptyField(false)
        setWrongCred(false)
    }

// Handle open signup modal
    const handleCreate = () => {
        setLoginOpen(false)
        setSignUpOpen(true)
    }

// Close modal
    if(loginOpen === false){
        return null
    }
    return(
        <>
            <article className="login-modal">
                <div className="login-modal__close-container">
                    <img onClick={() => setLoginOpen(false)} className="login-modal__close-button"src={closeIcon} alt="close icon"/>
                </div>
                <h2 className="login-modal__title">Login</h2>
                <form onSubmit={handleSubmit} className="login-modal__input-container">
                    <input onClick={() => handleReset()} className="login-modal__input-user"type="text" name="username" placeholder="User"></input>
                    <input onClick={() => handleReset()} className="login-modal__input-password" type="password" name="password" placeholder="Password"></input>
                    <p className={emptyField || wrongCred ? "login-modal__error" : loginSuccess ? "login-modal__success" : "login-modal__hidden"}>{loginResponse()}</p>
                    <button className="login-modal__submit" type="submit">Sign In</button>
                </form>
                <p className="login-modal__message">Don't have an account? <span onClick={() => handleCreate()} className="login-modal__create">Create one</span></p>
                </article>
            <div onClick={() => setLoginOpen(false)} className="login-modal__overlay"></div>
        </>
    )
}

export default LoginModal