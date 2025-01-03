import React from 'react'; 
import './intro.css'; 
import myself from './intro-images/profile.jpg'; 

const Intro = () => {
    return (
        <section id="me">
            <div className="aboutMe">
                <span className="greeting">Hello world! It's </span>
                <span className="introName" style={{fontFamily: 'Rubik Glitch, serif'}}>Kaelyn Pereira</span> 
                <p className="bio">I'm an undergrad student with a passion for optimizing systems and innovating solutions to complex problems; my interests span data science, operations research, and computer science, with a goal of making more efficient and impactful processes</p>
                <img className='myself' src={myself} alt="me"/>
            </div>
        </section>
    )
}

export default Intro; 