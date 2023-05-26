import React, {useState} from 'react';
import CourseList from '../helpers/CourseList';
import CourseCard from '../Components/courseCard';
import "../styles/Courses.css";

function Courses() {

    const coursesList = Object.keys(CourseList).map((key) => {
        return <CourseCard
                    key={key}
                    image={CourseList[key].Image} 
                    name={CourseList[key].Name} 
                    price={CourseList[key].price} 
                    tagline={CourseList[key].tagline}
                    id={key}/>
    })

    return (
        <div className="courses">
            <h1 className="coursesTitle">Courses</h1>
            <div className="CoursesList">
                {coursesList}                
            </div>
        </div>
    )
};

export default Courses
