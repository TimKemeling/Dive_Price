import React from 'react'
import "../styles/Footer.css";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <div className="socialMedia">
                <Link to="https://www.facebook.com/TMKScuba"><p>NEED SOCIAL LINKS MAYBE</p></Link>
                <Link to="https://www.facebook.com/TMKScuba"><p>NEED SOCIAL LINKS MAYBE</p></Link>
                
            </div>
            <p>&copy; 2023 DivePrices.com</p>

        </footer>
    )
}

export default Footer

