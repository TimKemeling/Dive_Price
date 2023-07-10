import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { businessName } from '../helpers/helpfuncs';

import backgroundImage from "../assets/reefBackground.jpg";
import '../styles/Home.css'



function Home() {

    const metacontent = `Welcome to ${businessName}. We help you find the perfect diveschool for you! fill in your preferences, have a look around and book your next adventure!`
    localStorage.clear()

    return (
        <HelmetProvider>
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
        </HelmetProvider>
    )
}

export default Home
