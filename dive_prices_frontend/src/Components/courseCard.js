import React from 'react';
import { Link } from "react-router-dom";

function courseCard({ image,  name, tagline, price, id}) {
    return (
        <div className="courseCard" >
            <div className="cardImage" style={{ backgroundImage: `url(${image})`}}></div>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>${price}</p>   
                <Link to={`/course/${id}`} tabIndex="-1" >
                    <button> Learn more </button>
                </Link>  
        </div>
    )
}

export default courseCard
