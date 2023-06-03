import React from 'react';
import { Link } from "react-router-dom";

function CourseCard({name, level, price, school_id}) {
    return (
        <div className="courseCard" >
                <h3>{name}</h3>
                <p>{level}</p>
                <p>${price}</p>   
                <Link to={`/schools/${school_id}`} tabIndex="-1" >
                    <button> Learn more </button>
                </Link>  
        </div>
    )
}

export default CourseCard
