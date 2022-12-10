import axios from 'axios';
import closeIcon from '../../assets/Images/Icons/close-icon.svg';

import './SignUpModal.scss';
import { useState } from 'react';

function SignUpModal({ signUpOpen, setSignUpOpen, setLoginOpen }) {

    const [noMatch, setNoMatch] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);
    const [userInUse, setUserInUse] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [emptyField, setEmptyField] = useState(false);

    const API_URL = process.env.REACT_APP_API_URL;
    const PORT = process.env.REACT_APP_PORT;

// Responses for signup errors
    const signUpResponse = () => {
        if(emptyField) {
            return "All fields must be filled"
        } if(noMatch) {
            return "Please make sure your passwords match"
        } if(passwordLength) {
            return "Please enter atleast 8 characters"
        } if(userInUse) {
            return "The Username is already in use"
        } if(signUpSuccess) {
            return "Successful Signup! Redirecting to Login ..."
        } else {
            return;
    }};

// Close modal
    if(!signUpOpen) {
        return null
    }

// Reset states on input focus
const handleReset = () => {
    setNoMatch(false)
    setPasswordLength(false)
    setUserInUse(false)
    setEmptyField(false)
}

// Handle onSubmit, post to DB
    const handleSignUp = (event) => {
        event.preventDefault();
        if(!event.target.username.value || !event.target.password.value || !event.target.confirm_password.value){ // Validate all fields filled
            return setEmptyField(true)
        }
        if(event.target.password.value !== event.target.confirm_password.value) { // Validate pw = confirmed pw
            return setNoMatch(true)
        }
        if(event.target.password.value.length < 8) { // Validate password length atleast 8 characters
            return setPasswordLength(true);
        }
        axios
        .post(`${API_URL}${PORT}/signup`, {
            username: event.target.username.value,
            password: event.target.password.value
        })
        .then((_response) => {
            setSignUpSuccess(true)
            setTimeout(() => {
                setSignUpOpen(false)
                setLoginOpen(true)
            }, 3000)
        })
        .catch((err) => {
            if(err.response.data === "Username already in use, please choose another"){ // Validate username in use
                setUserInUse(true)
            }
            console.log(err)
        })
    };

    return(
        <>
            <div className="signup-modal">
                <div className="signup-modal__close-container">
                    <img onClick={() => setSignUpOpen(false)} className="signup-modal__close-button"src={closeIcon} alt="close icon"/>
                </div>
                <h2 className="signup-modal__title">Sign Up</h2>
                <form onSubmit={handleSignUp} className="signup-modal__input-container">
                    <input onClick={() => handleReset()} className={userInUse || emptyField ? "signup-modal__input-error" : "signup-modal__input-user"} type="text" name="username" placeholder="User" />
                    <input onClick={() => handleReset()} className={noMatch || passwordLength || emptyField ? "signup-modal__input-error" : "signup-modal__input-password"} type="password" name="password" placeholder="Password" />
                    <input onClick={() => handleReset()} className={noMatch || passwordLength || emptyField ? "signup-modal__input-error" : "signup-modal__input-confirm-password"} type="password" name="confirm_password"placeholder="Confirm Password" />
                    <p className={noMatch || passwordLength || userInUse || emptyField ? "signup-modal__error" : signUpSuccess ? "signup-modal__success" : "signup-modal__hidden"}>{signUpResponse()}</p>
                    <button className="signup-modal__submit" type="submit">Register</button>
                </form>
            </div>
            <div onClick={() => setSignUpOpen(false)} className="signup-modal__overlay"></div>
        </>

    )
}

export default SignUpModal;