import React from 'react';
import { Link } from "react-router-dom";

function SchoolCard({name, tagline, agency, id}) {
    return (
        <div className="schoolCard" >
                <h3>{name}</h3>
                <p>Agency: {agency}</p>   
                <Link to={`/course/${id}`} tabIndex="-1" >
                    <button> Learn more </button>
                </Link>  
        </div>
    )
}

export default SchoolCard
