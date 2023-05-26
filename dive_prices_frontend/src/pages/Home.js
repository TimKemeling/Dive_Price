import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/reefBackground.jpg";
import '../styles/Home.css'

function Home() {
    return (
        <div className="home"
        style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <div 
            className="headerContainer" 
            >
                <h1>DivePrices.com</h1>
                <p>Find out how much you're paying at the dive school that fits you</p>
                <Link to="/courses" tabIndex="-1">
                    <button> BOOK NOW </button>
                </Link>    
            </div>
        </div>
    )
}

export default Home
