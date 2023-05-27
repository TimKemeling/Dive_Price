import React from 'react';
import {Helmet} from 'react-helmet'
import CourseCard from '../Components/courseCard';
import CourseList from '../helpers/CourseList';
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

    const school = "BLABLABLA"
    const location = "BLLLLAAA"

    return (
        <div className="courses">
            <Helmet>
                <title>courses at {school} in {location}</title>
                <meta name='description' content='Find all courses at your favourite location. Filter for age group, vibe or diveschool name!'/>

            </Helmet>
            <h1 className="coursesTitle">Courses</h1>
            <div className="CoursesList">
                {coursesList}                
            </div>
        </div>
    )
};

export default Courses
