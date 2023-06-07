import React from 'react';
import { Link } from "react-router-dom";

function CourseCard({name, level, price, agency, school, school_id}) {
    return (
        <div className="courseCard" >
                <h3>{name}</h3>
                <div className='courseInfo'>
                    <p>{level}</p>
                    <p>{agency}</p>
                    <p className='coursePrice'>฿{price}</p> 
                </div>
                <Link to={`/schools/${school_id}`}><button>{school}</button></Link>
                <Link to={`/booking`} tabIndex="-1" >
                    <button >Book Now</button>
                </Link>  
        </div>
    )
}

export default CourseCard
