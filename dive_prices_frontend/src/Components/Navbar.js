import React, {useState} from 'react';
import fishLogo from '../assets/fishLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    } 
    
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'closed'}>
                <Link to="/"><img src={fishLogo} alt="Company Logo"/></Link>
                <Link to="/"><p className="companyName">DivePrices.com</p></Link>

                {/* mobile menu */}
                <div className="hiddenLinks">
                    <Link to="/courses">Beginners</Link>  

                    {/* add more links to different pages/ files depending on what I want */}

                    <Link to="/schools">Schools</Link>          
                    <Link to="/booking">Book now</Link> 
                </div>  
            </div>      
            {/* desktop menu */}
            <div className='rightSide'> 
                <Link to="/courses">Beginners</Link>  

                <Link to="/courses">Advanced</Link>  
                {/* add more links to different pages/ files depending on what I want */}
              
                <Link to="/schools">schools</Link>          
                <Link to="/booking">Book now</Link> 
                <button onClick={toggleNavBar}>
                    <p>NEED BUTTON PICTURE</p>       
                </button>  
                </div> 
        </div>
    )
}

export default Navbar
