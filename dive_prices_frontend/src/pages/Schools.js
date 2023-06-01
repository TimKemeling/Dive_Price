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
                <p>
                   {schoolObject.description}
                </p>
            </div>
        </div>
        </div>
    )
}

export default Schools
