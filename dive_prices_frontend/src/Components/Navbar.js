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
                <img src={fishLogo} alt="Company Logo"/> 
                <p className="companyName">DivePrices.com</p>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>          
                    <Link to="/courses">Beginners</Link>  

                    {/* add more links to different pages/ files depending on what I want */}

                    <Link to="/about">Schools</Link>          
                    <Link to="/contact">Contact</Link> 
                </div>  
            </div>            
            <div className='rightSide'> 
                <Link to="/">Home</Link>          
                <Link to="/courses">Beginners</Link>  

              {/* add more links to different pages/ files depending on what I want */}
              
                <Link to="/about">schools</Link>          
                <Link to="/contact">booking</Link> 
                <button onClick={toggleNavBar}>
                    <p>NEED BUTTON PICTURE</p>       
                </button>  
                </div> 
        </div>
    )
}

export default Navbar
