import React from 'react';
import {Helmet} from 'react-helmet'
import "../styles/Beginners.css";

function Fundiving() {

    



    return (
        <div className="courses">
            <Helmet>
                <title>diveprices.com FunDiving</title>
                <meta name='description' content='Find out how fundiving works and book your some dives at your favourite school!'/>

            </Helmet>
            <h1 className="FundiversTitle">YOU NEED TO READ THIS FIRST</h1>
            <div className='buttoncontainer'>
                <button>Refreshers</button>
                <button>Fundiving</button>
            </div>


            <p className='fundivertext'>
                Fun diving offers certified divers the opportunity to explore underwater realms and enjoy the sheer pleasure of diving without the structured training of a course. 
                It allows divers to venture into captivating dive sites, immerse themselves in the beauty of marine ecosystems, and encounter fascinating marine life.
            </p>
            <p className='fundivertext'>
               Fun dives are typically guided by experienced dive professionals who provide local expertise and ensure divers' safety. 
               These dives can take place in various locations, ranging from vibrant coral reefs to mesmerizing wrecks. 
               Fun diving is flexible and tailored to individual preferences, allowing divers to choose the depth, duration, and number of dives based on their experience and comfort level.  
            </p>
            <p className='fundivertext'>
                It offers the freedom to discover new sites, revisit favorite spots, and continuously improve diving skills in a relaxed and enjoyable environment. 
                Whether it's exploring a coral garden teeming with colorful fish, encountering majestic sea turtles, or marveling at the intricate details of a sunken ship, fun diving promises thrilling adventures and unforgettable memories. 
                It's a way to escape the everyday world and embark on a journey where time seems to stand still, and the wonders of the underwater realm come to life. 
                Fun diving is a gateway to endless exploration, making it an essential part of every certified diver's diving journey.
            </p>

        </div>
    )
};

export default Fundiving
