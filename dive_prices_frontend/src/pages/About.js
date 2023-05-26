import React from 'react'
import "../styles/About.css"
import maltaRock from "../assets/MaltaRock.png"

function About() {
const aboutText =   `I'm Tim Kemeling, A diving instructor originally from The Netherlands.
                    Currently I am living on a small island in the gulf of Thailand called Koh Tao.
                    I have 5 years of experience in the diving industry, and I've worked in a number of different locations. 
                    My experience includes diving in tropical areas and the Mediterranean sea. 
                    I have taught over 300 student how to dive, from beginners to experienced divers. 
                    Troughout my courses I try to adapt to the student to make everyones time as fun as possible!
                    I am able to teach in English and Dutch, normally my preference is to teach in English because it's a more international 
                    language. That way you're still able to dive when you don't have a Dutch speaking dive guide.
                    Please contact me if you have any questions!!`

    return (
        <div className="aboutPage">
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="aboutImage"></div>
            <div className="aboutContainer">
            <div className="aboutBox">
                <h1>About Me</h1> 
                <p>
                    {aboutText}
                </p>
            </div>
        </div>
        </div>
    )
}

export default About
