import React from 'react';
import { useParams } from "react-router-dom";
import { useAPI } from '../helpers/useAPI';
import CourseCard from '../Components/CourseCard';


import "../styles/Course.css";

function Course() {
    
    const FetchBeginnerlist = () => {
        const url = "http://127.0.0.1:8000/api/beginner-overview"
        const response = useAPI(url)
        return response
    }

    // const Advancedlist = () => {
    //     const url = "http://127.0.0.1:8000/api/beginner-overview"
    //     const result = useAPI(url)
    //     if (result.loading ===false){
    //         const courselist = result.data
    //         return courselist
    //     }
    // }

    // const Fundivelist = () => {
    //     const url = "http://127.0.0.1:8000/api/beginner-overview"
    //     const result = useAPI(url)
    //     if (result.loading ===false){
    //         const courselist = result.data
    //         return courselist
    //     }
    // }


    function filterOW(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Open Water Diver' || 
                    course.name === 'Open Water 20';
        });
        return courseList
    }

    const makeComp = () => {

    }
    // SORT OUT THIS AFTER YOU CALL COURSELIST > NEED TO USE FILTER OW AND THEN 
    // MAKE A MAKECOMP FUNCTION
    
    // <CourseCard
    //             key={course.id}
    //             name={course.course_name}
    //             level = {course.level} 
    //             price = {course.price}
    //             agency={course.agency}
    //             school_id={course.schoolsid_id}/>


    const params = useParams();
    const response = FetchBeginnerlist()

    const Courselist = () => {
        if (response.loading === false){
            const courses = response.data
            const courselist = filterOW(courses)
            return courselist
        }    
    }

    const courselist = Courselist()
    console.log(courselist)
    
    function Getinfo (params) {
        switch (params.course) {
            case 'OW':
                // const apilist = Beginnerlist() 
                // if (apilist.loading === false) {
                // courselist = makeComp(apilist)
                // }
                break;
        
            default:
                break;
        }
    }
    

    return (
        <div className='courseContainer'>
            {Getinfo(params)}
        </div>
    )
}
export default Course
