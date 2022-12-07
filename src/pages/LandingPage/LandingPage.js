import './LandingPage.scss'
import { useState, useEffect } from 'react';

import logoSvg from '../../assets/Images/Logo/logo.png';
import LoginModal from '../../components/LoginModal/LoginModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';

function LandingPage() {
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
                    <img className="landing-page__logo-img"src={logoSvg} alt="logo leaf"/>
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
            />
            <SignUpModal 
            signUpOpen={signUpOpen}
            setSignUpOpen={setSignUpOpen}
            />
        </>
    )
}

export default LandingPage;