import './LoginModal.scss'

import closeIcon from '../../assets/Images/Icons/close-icon.svg';

function LoginModal({ loginOpen, setLoginOpen, setSignUpOpen }) {

    const handleCreate = () => {
        setLoginOpen(false)
        setSignUpOpen(true)
    }
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
                <div className="login-modal__input-container">
                    <input className="login-modal__input-user"type="text" placeholder="User"></input>
                    <input className="login-modal__input-password" type="password" placeholder="Password"></input>
                    <button className="login-modal__submit">Sign In</button>
                </div>
                <p className="login-modal__message">Don't have an account? <span onClick={() => handleCreate()} className="login-modal__create">Create one</span></p>
                </article>
            <div onClick={() => setLoginOpen(false)} className="login-modal__overlay"></div>
        </>
    )
}

export default LoginModal