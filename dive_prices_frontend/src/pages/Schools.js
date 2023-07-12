import React from 'react'
import { useAPI } from '../helpers/useAPI';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ApiUrls } from '../helpers/helpfuncs';
import CourseCard from '../Components/CourseCard';

import "../styles/Schools.css"
import maltaRock from "../assets/MaltaRock.png"
import banslogo from "../assets/bansLogo.png"
import BBlogo from "../assets/BBlogo.png"
import blackturtlelogo from "../assets/blackturtlediveLogo.webp"
import crystallogo from "../assets/crystalLogo.png"
import hydrologo from "../assets/HydroLogo.png"
import KTDLogo from "../assets/KTDLogo.png"
import navaLogo from "../assets/navaLogo.png"
import NewHeavenLogo from "../assets/NewHeavenLogo.png"
import saireecottageLogo from "../assets/saireecottageLogo.png"
import scubabirdsLogo from "../assets/scubabirdsLogo.png"
import scubashackLogo from "../assets/scubashackLogo.webp"
import SimpleLifeLogo from "../assets/SimpleLifeLogo.png"



function Schools() {

    const url = ApiUrls.Schoollist
    const response = useAPI(url)
    const schoolList = response.data

    const params = useParams()
    let schoolObject = []
    if (response.loading === false) {
        const num = params.id -1
        schoolObject = schoolList[num]
    }

    const school = schoolObject.school_name
    const location = schoolObject.city
    const title = `Dive with ${school} in ${location}`
    let pro = ''
    let logo = ''
    let neighbourhood = ''


    if (schoolObject.pro_1) {
        pro = 'Up to Dive master'
    } else if (schoolObject.pro_2) {
        pro = "Up to instructor"
    } else if (schoolObject.pro_3) {
        pro = "Up to instructor trainer"
    }

    switch (schoolObject.neighbourhood) {
        case 'sairee':
            neighbourhood = "Sairee"
            break;       
        case 'maehaad':
            neighbourhood = "Mae Haad"
            break;       
        case 'chalok':
            neighbourhood = "Chalok"
            break;
        default:
            break;
    }

    switch (school) {
        case 'Big Blue Diving':
            logo = BBlogo
            break;
        case 'Black Turtle Dive':
            logo = blackturtlelogo
            break;
        case 'Koh Tao Divers':
            logo = KTDLogo
            break;
        case 'Scuba Birds':
            logo = scubabirdsLogo
            break;
        case 'Hydronauts Diving':
            logo = hydrologo
            break;
        case 'Nava':
            logo = navaLogo
            break;
        case 'Bans':
            logo = banslogo
            break;
        case 'Crystal Dive':
            logo = crystallogo
            break;
        case 'Simple Life Divers':
            logo = SimpleLifeLogo
            break;
        case 'Sairee Cottage Diving':
            logo = saireecottageLogo
            break;
        case 'Scuba Shack':
            logo = scubashackLogo
            break;
        case 'New Heaven':
            logo = NewHeavenLogo
            break;
        default:
            break;
    }

    const Fetchcourselist = () => {
        const schoolnum = params.id
        const url = ApiUrls.CoursesBySchool + schoolnum
        const response = useAPI(url)
        return response
    }

    const Courselist = () => {
        const response = Fetchcourselist()
        if (!response.loading) {
        const courses = response.data

        const courselist = courses?.map(course => {
            return <CourseCard 
                name = {course.name}
                level = {course.level}
                price = {course.price}
                school = {course.school}
                agency={course.agency}
                school_id={course.schoolsid_id}
                course_id={course.id}
                key={course.id}
            />
        })
        return courselist
        };
    };

    const courselist = Courselist()

    let count = 0 
    courselist?.forEach(element => {
        count = count + 1
    });


    const setSchoolStorage = () => {
        localStorage.setItem("school", JSON.stringify([schoolObject.school_name, schoolObject.id]))
    }
    
    localStorage.removeItem('school')
    localStorage.removeItem('course')
    
    return (
        <HelmetProvider>
        <div className="aboutPage">
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`all you need to know about ${school} in ${location} `}/>
        </Helmet>
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="aboutImage">
            <div className="aboutBox">
                <img className='schoollogo' src={logo} alt='dive school logo'/>
                <h3>Location:</h3>
                <div className='schoolLocInfo'>
                    <p>{schoolObject.city}</p>
                    <p>{neighbourhood}</p> 
                </div>

                <h3>Amenities:</h3>
                <div className='schoolMiscInfo'>
                    <p>Pro training: {pro}</p>
                    {schoolObject.beach? <p>Beachfront location</p> : <p style={{display: "none"}}></p> }
                </div>

                <h3>About {school}</h3>
                <p>
                   {schoolObject.description}
                </p>
                <Link to={'/booking'}><button className='schoolbook' onClick={setSchoolStorage} >Book a course at {school}</button></Link>
            </div>
        </div>

        <h2 className='schoolcoursesheader'>Courses available at {school}: {count}</h2>
        <div className='schoolcoursesContainer'>{courselist}</div>
        </div>
        </HelmetProvider>
    )
}

export default Schools
