import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Link } from 'react-router-dom';
import { scrollTop } from '../helpers/helpfuncs';
import "../styles/Categorypage.css";
import { businessName } from '../helpers/helpfuncs';

function Advanced() {
    const button1 = 'Advanced OW Courses'
    const page1 = 'Advanced-Open-Water'
    
    const button2 = 'Specialty Courses'
    const page2 = 'Specialties'



    return (
        <HelmetProvider>
        <div className="category">
            <Helmet>
                <title>{businessName} Advanced Scuba Courses</title>
                <meta name='description' content='Find out about what makes a good advanced scuba course and book your favourite course at the right divecenter!'/>

            </Helmet>
            <h1 className="categoryTitle">Continuing education</h1>
            <div className='buttoncontainer'>
            <Link to={`/course/${page1}`} tabIndex="-1" ><button onClick={scrollTop}>{button1}</button></Link> 
            <Link to={`/course/${page2}`} tabIndex="-1" ><button onClick={scrollTop}>{button2}</button></Link> 
            </div>

            <div className='background'>
                <div className='textbox'>
                    <p className='categorytext'>
                    Continuing education dive courses offer certified divers the chance to expand their diving knowledge and skills. These courses are designed to enhance divers' capabilities, confidence, and understanding of specific aspects of diving. 
                                
                    </p>
                    <p className='categorytext'>
                    With a variety of specialties available, participants can choose courses that align with their interests and goals. Continuing education courses cover a wide range of topics, such as advanced buoyancy control, underwater navigation, deep diving, wreck diving, night diving, and underwater photography. 
                    Led by experienced instructors, these courses provide in-depth theoretical knowledge and practical training. Divers learn advanced techniques, refine their diving skills, and gain insights into specialized diving activities.
                    </p>
                    <p className='categorytext'>
                    Whether seeking to explore new underwater environments, master advanced diving procedures, or specialize in a particular area of interest, continuing education courses provide the opportunity to dive deeper into the world of scuba diving. 
                    These courses not only enhance safety and proficiency but also open doors to new diving experiences and adventures. By expanding their knowledge and skill set, certified divers can unlock a world of possibilities and take their diving to new heights. Continuing education courses empower divers to become more well-rounded and knowledgeable enthusiasts, enabling them to fully enjoy the wonders of the underwater world.
                    </p>
                </div>
                
            </div>
            <div className='buttoncontainer'>
            <Link to={`/course/${page1}`} tabIndex="-1" ><button onClick={scrollTop}>{button1}</button></Link> 
            <Link to={`/course/${page2}`} tabIndex="-1" ><button onClick={scrollTop}>{button2}</button></Link> 
            </div>

        </div>
        </HelmetProvider>
    )
};

export default Advanced
