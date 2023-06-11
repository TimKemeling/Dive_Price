import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'

import backgroundImage from "../assets/reefBackground.jpg";
import '../styles/Home.css'



function Home() {

    return (
        <div className="home"
        style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <Helmet>
                <title>DivePrices.com</title>
                <meta name='description' content='Welcome to DivePrices.com. We help you find the perfect diveschool for you! fill in your preferences, have a look around and book your next adventure!'/>
            </Helmet>
            <div 
            className="headerContainer" 
            >
                <h1>DivePrices.com</h1>
                <p>Find out how much you're paying at the dive school that fits you</p>
                <div className='homebuttons'>
                    <Link to="/booking" tabIndex="-1"><button> BOOK NOW </button></Link>    
                    <Link to="/search" tabIndex="-1"><button> Browse Schools </button></Link>    
                </div>


            </div>
        </div>
    )
}

export default Home
