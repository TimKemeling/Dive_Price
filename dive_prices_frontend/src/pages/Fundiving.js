import React from 'react';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import "../styles/Categorypage.css";
import { businessName } from './names';

function Fundiving() {
    const button1 = 'Refresher'
    const page1 = 'Refresher'

    const button2 = 'Fun Diving'
    const page2 = 'Fun-Diving'


    return (
        <div className="category">
            <Helmet>
                <title>{businessName} FunDiving</title>
                <meta name='description' content='Find out how fundiving works and book your some dives at your favourite school!'/>

            </Helmet>
            <h1 className="categoryTitle">Fun Diving</h1>
            <div className='buttoncontainer'>
            <Link to={`/course/${page1}`} tabIndex="-1" ><button>{button1}</button></Link> 
            <Link to={`/course/${page2}`} tabIndex="-1" ><button>{button2}</button></Link> 
            </div>

            <div className='background'>
                <div className='textbox'>
                    <p className='categorytext'>
                        Fun diving offers certified divers the opportunity to explore underwater realms and enjoy the sheer pleasure of diving without having to do skills and training like you would during a course. 
                        It allows divers to venture into captivating dive sites, immerse themselves in the beauty of marine ecosystems, and encounter fascinating marine life.
                    </p>
                    <p className='categorytext'>
                        Fun dives are typically guided by experienced dive professionals who provide local expertise and ensure divers' safety. 
                        These dives can take place in various locations, ranging from vibrant coral reefs to mesmerizing wrecks. 
                        Fun diving is flexible and tailored to individual skill levels, allowing divers to dive with other peoople in a group based on their experience and comfort level.  
                        It offers the freedom to discover new sites, revisit favorite spots, and continuously improve diving skills in a relaxed and enjoyable environment. 

                    </p>
                    <p className='categorytext'>
                        Whether it's exploring a coral garden teeming with colorful fish, encountering majestic marine life, or marveling at the intricate details of a sunken ship, fun diving promises thrilling adventures and unforgettable memories. 
                        It's a way to escape the everyday world and embark on a journey where time seems to stand still, and the wonders of the underwater realm come to life. 
                        Fun diving is a gateway to endless exploration, making it an essential part of every certified diver's diving journey.
                    </p>
                </div>
            </div>
            <div className='buttoncontainer'>
            <Link to={`/course/${page1}`} tabIndex="-1" ><button>{button1}</button></Link> 
            <Link to={`/course/${page2}`} tabIndex="-1" ><button>{button2}</button></Link> 
            </div>

        </div>
    )
};

export default Fundiving
