import React from 'react'
import { useAPI } from '../helpers/useAPI';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

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

    const url = "http://127.0.0.1:8000/api/school-list"
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

    if (schoolObject.pro_1) {
        pro = 'Up to Dive master'
    } else if (schoolObject.pro_2) {
        pro = "Up to instructor"
    } else if (schoolObject.pro_3) {
        pro = "Up to instructor trainer"
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

    return (
        <HelmetProvider>
        <div className="aboutPage">
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`all you need to know about ${school} in ${location} `}/>
        </Helmet>
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="aboutImage"></div>
            <div className="aboutContainer">
            <div className="aboutBox">
                <img className='schoollogo' src={logo} alt='dive school logo'/>
                <div className='schoolLocInfobox'>
                    <h3>Location:</h3>
                    <div className='schoolLocInfo'>
                        <p>{schoolObject.city}</p>
                        <p>{schoolObject.neighbourhood}</p> 
                    </div>
                </div>

                <div className='schoolMiscInfoBOX'>
                    <h3>Amenities:</h3>
                    <div className='schoolMiscInfo'>
                        <p>Pro training: {pro}</p>
                        <p>{schoolObject.beach? "Beachfront location" : "no Beachfront access"}</p>
                    </div>
                </div>

                <h3>About {school}</h3>
                <p>
                   {schoolObject.description}
                </p>
                <Link to={'/booking'}><button className='schoolbook'>Book a course at {school}</button></Link>
            </div>
        </div>
        </div>
        </HelmetProvider>
    )
}

export default Schools
