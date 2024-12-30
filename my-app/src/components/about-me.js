import React from 'react';
import './about-me.css';
import me from './images/temp_me.jpg'; 

const AboutMe = () => {
    return (
        <section id="aboutme">
            <div className="aboutme">
                <p className='intro'>Beyond my academic and professional pursuits, I try my best to maintain a healthy work-school-life balance</p>
                <img src={me} alt='me' className='me'/> 
            </div>
        </section>  
    )
}

export default AboutMe; 