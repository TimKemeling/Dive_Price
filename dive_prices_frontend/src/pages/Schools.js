import React from 'react'
import { useAPI } from '../helpers/useAPI';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import "../styles/Schools.css"
import maltaRock from "../assets/MaltaRock.png"


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

    if (schoolObject.pro_1) {
        pro = 'Up to Dive master'
    } else if (schoolObject.pro_2) {
        pro = "Up to instructor"
    } else if (schoolObject.pro_3) {
        pro = "Up to instructor trainer"
    }

    return (
        <div className="aboutPage">
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`all you need to know about ${school} in ${location} `}/>
        </Helmet>
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="aboutImage"></div>
            <div className="aboutContainer">
            <div className="aboutBox">
                <h1>{school}</h1> 
                <div className='schoolLocInfo'>
                    <p>{schoolObject.country}</p>
                    <p>{schoolObject.city}</p>
                    <p>{schoolObject.neighbourhood}</p>
                </div>

                <div className='schoolMiscInfo'>
                    <p>Pro training: {pro}</p>
                    <p>{schoolObject.beach? "Beachfront access available" : "no Beachfront access"}</p>
                </div>

                <p>
                   {schoolObject.description}
                </p>
            </div>
        </div>
        </div>
    )
}

export default Schools
