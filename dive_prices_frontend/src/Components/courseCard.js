import React from 'react';
import { Link } from "react-router-dom";
import { scrollTop } from '../helpers/helpfuncs';

function CourseCard({name, level, price, agency, school, school_id, course_id}) {

    const setStorage = () => {
        localStorage.setItem("school", JSON.stringify([school, school_id]))
        localStorage.setItem("course", JSON.stringify([name, course_id]))
    }

    const url = window.location.href
    const inSchools = url.includes('schools')
    return (
        <div className="courseCard" >
                <h3>{name}</h3>
                <div className='courseInfo'>
                    <p>{level}</p>
                    <p>{agency}</p>
                    <p className='coursePrice'>฿{price}</p> 

                </div>
                <div className='courseLinks'>
                    {!inSchools? <Link to={`/schools/${school_id}`}> 
                    <button onClick={scrollTop} className='coursefirstbutton'>{school}</button>
                    </Link>: <p style={{display:"none"}}></p> }

                    <Link to={`/booking`} tabIndex="-1" onClick={scrollTop} >
                    <button onClick={setStorage} className='coursesecondbutton'>Book Now</button>
                    </Link> 
                </div>
        </div>
    )
}

export default CourseCard
