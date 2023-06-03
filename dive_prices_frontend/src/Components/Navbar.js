import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import fishLogo from '../assets/fishLogo.png';
import '../styles/burger.css';
import '../styles/Navbar.css';


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavBar = (event) => {
        setOpenLinks(!openLinks)

        console.log(openLinks)
    } 
    
    const navlink1 = 'Find'
    const navlink2 = 'Beginners'
    const navlink3 = 'Advanced'
    const navlink4 = 'Fun Diving'
    const navlink5 = 'Book'
    
    // if (!openLinks) {
        return (
        <div className='navbar'>
            <div className='company'>
                <Link to="/"><img src={fishLogo} className='complogo' alt="Company Logo"/></Link>
                <Link to="/"><p className="companyName">DivePrices.com</p></Link> 
            </div> 
            {!openLinks? (
                <div className='desktoplinks'> 
                <Link to="/search">{navlink1}</Link>
                <Link to="/beginners">{navlink2}</Link>  
                <Link to="/advanced">{navlink3}</Link>  
                <Link to="/fundiving">{navlink4}</Link>  
                <Link to="/booking">{navlink5}</Link> 
            </div> 
            ): (
                <div className='mobilelinks'> 
                <Link to="/search">{navlink1}</Link>
                <Link to="/beginners">{navlink2}</Link>  
                <Link to="/advanced">{navlink3}</Link> 
                <Link to="/fundiving">{navlink4}</Link>  
                <Link to="/booking">{navlink5}</Link> 
            </div>
            )}     
            <div className="burger">
                <input type="checkbox" onClick={toggleNavBar} id="checkbox4" className="checkbox4 visuallyHidden"></input>
                <label htmlFor="checkbox4">
                    <div className="hamburger hamburger4">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                        <span className="bar bar5"></span>
                    </div>
                </label>        
            </div>
        </div>)

    } 
    // else {
    //     return (
    //     <div className='navbar'>
    //         <div className='mobile'>
    //             <Link to="/"><img src={fishLogo} className='complogo' alt="Company Logo"/></Link>
    //             <Link to="/"><p className="companyName">DivePrices.commobile</p></Link>
    //         </div> 
    //         <div className="hiddenLinks">
    //                 <Link to="/search">Find</Link>
    //                 <Link to="/beginners">Beginners</Link>  
    //                 <Link to="/search">Advanced</Link>  
    //                 <Link to="/booking">Book now</Link> 
    //         </div>  
    //         <div onClick={toggleNavBar} className="burger">
    //         <Burger/>
    //         </div>     
    //     </div>
    //     )
    // }
// }

export default Navbar
