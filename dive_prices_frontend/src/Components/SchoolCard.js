import React from 'react';
import { Link } from "react-router-dom";

function SchoolCard({name, price, agency, tagline, id}) {
    return (
        <div className="schoolCard" >
                <h3>{name}</h3>
                <p>Agency: {agency}</p> 
                <p>Price Range: {price}</p>  
                <p>{tagline}</p>
                <Link to={`/schools/${id}`} tabIndex="-1" >
                    <button> Learn more </button>
                </Link>  
        </div>
    )
}

export default SchoolCard
