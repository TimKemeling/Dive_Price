import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'

import backgroundImage from "../assets/reefBackground.jpg";
import '../styles/Home.css'
import { businessName } from './names';



function Home() {

    const metacontent = `Welcome to ${businessName}. We help you find the perfect diveschool for you! fill in your preferences, have a look around and book your next adventure!`
    return (
        <div className="home"
        style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <Helmet>
                <title>{businessName}</title>
                <meta name='description' content={metacontent}/>
            </Helmet>
            <div 
            className="headerContainer" 
            >
                <h1>{businessName}</h1>
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
