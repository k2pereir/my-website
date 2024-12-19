import React from 'react';
import './navbar.css'; 
import {Link} from 'react-scroll';  

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Menu">
                <Link to="about-me" smooth={true} duration={500} className="MenuListItem">About Me</Link>
                <Link to="education" smooth={true} duration={500} className="MenuListItem">Education</Link>
                <Link to="projects" smooth={true} duration={500} className="MenuListItem">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;