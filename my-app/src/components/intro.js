import React from 'react'; 
import './intro.css'; 

const Intro = () => {
    return (
        <section id="me">
            <div className="aboutMe">
                <span className="greeting">Hello world! It's </span>
                <span className="introName">Kaelyn Pereira</span> 
                <p className="bio">I'm an undergrad student with passion for data-driven decision-making excited to learn, create, and explore all things tech!</p>
                <img src="/mclaren.png" alt="McLaren" className="car"/>
            </div>
        </section>
    )
}

export default Intro; 