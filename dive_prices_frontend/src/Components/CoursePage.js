import React from 'react';

function CoursePage({image, name, description, price}) {
    return (
        <div className="course">
            <h2>{name}</h2>
            <img className="courseImage" src={`${image}`}/>
            <p className="courseDescription">{description}</p>
            <p className="coursePrice">$ {price}</p>  
            <button className="bookButton">Book Now!</button>    
        </div>
    )
}

export default CoursePage
