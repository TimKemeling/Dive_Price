import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import '../styles/NotFound.css';
import notfound from '../assets/pageNotFoundDiver.png'
import { businessName } from './names';



function PageNotFound() {

    const metacontent = `Welcome to ${businessName}. This Page does not exist Please try a different one!`

    return (
        <div className="notfound">
            <Helmet>
                <title>404 Page not found {businessName}</title>
                <meta name='description' content={metacontent}/>
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
