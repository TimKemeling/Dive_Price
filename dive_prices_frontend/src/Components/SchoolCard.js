import React from 'react';
import { Link } from "react-router-dom";
import { scrollTop } from '../helpers/helpfuncs';

function SchoolCard({name, price, agency, tagline, id}) {
    return (
        <div className="schoolCard" >
        <div>
            <h3>{name}</h3>
            <p>Agency: {agency}</p> 
            <p>Price Range: {price}</p> 
            <p>{tagline}</p>
        </div>
            <Link to={`/schools/${id}`} tabIndex="-1">
                <button onClick={scrollTop}> Learn more </button>
            </Link>  
        </div>
    )
}

export default SchoolCard
