import React, { useEffect} from 'react'
import "../styles/Schools.css"
import maltaRock from "../assets/MaltaRock.png"
import CourseCard from '../Components/courseCard';


function Schools() {

    const diveSchool = 'diveschool'
    const diveSchoolLocation = 'location'

    useEffect(() => {
        document.title = `Dive with ${diveSchool} in ${diveSchoolLocation}`;
    }, [])

    return (
        <div className="aboutPage">
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="aboutImage"></div>
            <div className="aboutContainer">
            <div className="aboutBox">
                <h1>SCHOOLNAME</h1> 
                <p>
                    school description from API call
                </p>
            </div>
            <CourseCard
                    key= {"1"}
                    image={"none"} 
                    name={"OW"} 
                    price={5000} 
                    tagline={"blablaow"}
                    id={"1"}/>
        </div>
        </div>
    )
}

export default Schools
