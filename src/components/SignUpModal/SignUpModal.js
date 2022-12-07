import closeIcon from '../../assets/Images/Icons/close-icon.svg';

import './SignUpModal.scss';

function SignUpModal({ signUpOpen, setSignUpOpen }) {
    if(!signUpOpen) {
        return null
    }
    return(
        <>
            <article className="signup-modal">
                <div className="signup-modal__close-container">
                    <img onClick={() => setSignUpOpen(false)} className="signup-modal__close-button"src={closeIcon} alt="close icon"/>
                </div>
                <h2 className="signup-modal__title">Sign Up</h2>
                <div className="signup-modal__input-container">
                    <input className="signup-modal__input-first-name"type="text" placeholder="First Name"></input>
                    <input className="signup-modal__input-last-name"type="text" placeholder="Last Name"></input>
                    <input className="signup-modal__input-user"type="text" placeholder="User"></input>
                    <input className="signup-modal__input-password" type="password" placeholder="Password"></input>
                    <button className="signup-modal__submit">Register</button>
                </div>
                </article>
            <div onClick={() => setSignUpOpen(false)} className="signup-modal__overlay"></div>
        </>

    )
}

export default SignUpModal;