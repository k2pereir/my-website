import React from 'react'; 
import './me.css'; 

const Me = () => {
    return (
        <section id="me">
            <div className="aboutMe">
                <span className="greeting">Hey, </span>
                <span className="intro">I'm <span className="introName">Kaelyn Pereira</span> </span>
                <p className="bio">filler text</p>
            </div>
            <img src="/placeholder.jpg" alt="kp" className="kaelyn"/>
        </section>
    )
}

export default Me; 