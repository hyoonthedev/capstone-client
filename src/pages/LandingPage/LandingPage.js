import './LandingPage.scss';
import { useState, useEffect } from 'react';

import LoginModal from '../../components/LoginModal/LoginModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import { useNavigate } from 'react-router-dom'

function LandingPage({ setloginSuccess, loginSuccess, loggedUserId }) {
    
    const navigate = useNavigate();
    
// Landing Page Text Change List
    const wordList = [
        "Robust",
        "Exciting",
        "Unique",
        "Fantastic",
        "Gourmet",
        "Your",
        "Special",
        "Amazing",
        "Delicious",
        "Mouth-Watering"
    ];

    const [describeName, setDescribeName] = useState(wordList[0]);
    const [describeNameStatus, setDescribeNameStatus] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    
// Changes Text
    useEffect(() => {
        if(!describeNameStatus) {
        setInterval(function() {
            const wordListLength = wordList.length - 1
            const randomWordList = Math.floor(Math.random() * wordListLength)
            setDescribeName(wordList[randomWordList])
        }, 5000)
    } setDescribeNameStatus(true)
    },[])

    return(
        <>
            <section className="landing-page">
                <div className="landing-page__logo-container">
                    <h3 className="landing-page__logo-title">panTree</h3>
                    <span className="landing-page__logo-img">
                        <i className="fa-sharp fa-solid fa-leaf"></i>
                    </span>
                </div>
                <div className="landing-page__hero-container">
                    <div className="landing-page__hero-text-container">
                        <h1 className="landing-page__hero-title">Discover</h1>
                        <span className="landing-page__hero-changing-text">{describeName}</span>
                        <h1 className="landing-page__hero-title">Recipes</h1>
                    </div>
                    <div onClick={() => setSignUpOpen(true)} className="landing-page__hero-start">Get Started</div>
                    <p className="landing-page__hero-signin-container">Already have an account? <span onClick={() => setLoginOpen(true)} className="landing-page__hero-signin">Sign In</span></p>
                </div>
            </section>
            <LoginModal 
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}
            setSignUpOpen={setSignUpOpen}
            setloginSuccess={setloginSuccess}
            loginSuccess={loginSuccess}
            />
            <SignUpModal 
            signUpOpen={signUpOpen}
            setSignUpOpen={setSignUpOpen}
            setLoginOpen={setLoginOpen}
            />
        </>
    )
}

export default LandingPage;