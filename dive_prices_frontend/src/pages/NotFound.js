import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import '../styles/NotFound.css';
import notfound from '../assets/pageNotFoundDiver.png'



function PageNotFound() {

    return (
        <div className="notfound">
            <Helmet>
                <title>404 Page not found DivePrices.com</title>
                <meta name='description' content='Welcome to DivePrices.com. This Page does not exist Please try a different one!'/>
            </Helmet>
            <div 
            className="notfoundheader" 
            >
                <h1>Whoops!</h1>
                <p>This page doesn't exist..</p>
                
                <Link to="/" tabIndex="-1">
                    <button> go back home </button>
                </Link>    
            </div>
            <div className='notfoundimgcontainer'>
                <div className='notfoundimage' style={{ backgroundImage: `url(${notfound})`}}></div>
            </div>

        </div>
    )
}

export default PageNotFound
