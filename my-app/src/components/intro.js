import React from 'react'; 
import './intro.css'; 

const Intro = () => {
    return (
        <section id="me">
            <div className="aboutMe">
                <span className="greeting">Hello world! It's </span>
                <span className="introName">Kaelyn Pereira</span> 
                <p className="bio">I’m an undergrad student with a passion for optimizing systems and solving complex problems; my interests span data science, operations research, and computer science, with a goal of making more efficient and impactful processes</p>
                <img src="/mclaren.png" alt="McLaren" className="car"/>
            </div>
        </section>
    )
}

export default Intro; 