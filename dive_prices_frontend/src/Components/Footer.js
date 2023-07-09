import React from 'react'
import "../styles/Footer.css";
import { Link } from "react-router-dom"
import { businessName } from '../pages/names';
import { scrollTop } from '../helpers/helpfuncs';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerlists">
            <div>
                <h4>Beginnners</h4>
                <Link to="/course/Try-Diving" tabIndex="-1"><p onClick={scrollTop}>Try Diving</p></Link>
                <Link to="/course/Open-Water" tabIndex="-1"><p onClick={scrollTop}>Open Water</p></Link>
            </div>
            <div>
                <h4>Advanced</h4>
                <Link to="/course/Advanced-Open-Water" tabIndex="-1"><p onClick={scrollTop}>Advanced Open Water</p></Link>
                <Link to="/course/Specialties" tabIndex="-1"><p onClick={scrollTop}>Specialty Courses</p></Link>
            </div>
            <div>
                <h4>Fun Diving</h4>
                <Link to="/course/Fundiving" tabIndex="-1"><p onClick={scrollTop}>Fun Diving</p></Link>
                <Link to="/course/Refresher" tabIndex="-1"><p onClick={scrollTop}>Refreshers</p></Link>
            </div>
            <div>
                <Link to="/course/Tech" tabIndex="-1"><h4 onClick={scrollTop}>Tech</h4></Link>
                <Link to="/FAQ" tabIndex="-1"><h4 onClick={scrollTop}>FAQ</h4></Link>
                <Link to="/booking" tabIndex="-1"><h4 onClick={scrollTop}>Book Now</h4></Link>

            </div>                
            </div>
            <p>&copy; 2023 {businessName}</p>

        </footer>
    )
}

export default Footer

