import './HomeHero.scss';
import { useState, useEffect } from 'react';

function HomeHero() {

// List of words for span 
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
        <div className="home-hero">
            <div className="home-hero__overlay"></div>
            <div className="home-hero__container">
                <h1 className="home-hero__title">Discover</h1>
                <span className="home-hero__seperate-text">{describeName}</span>
                <h1 className="home-hero__title">Recipes</h1>
            </div>
            <div className="home-hero__start">Get Started</div>
        </div>
    )
}

export default HomeHero;