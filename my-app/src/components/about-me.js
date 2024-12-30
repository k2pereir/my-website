import React from 'react';
import './about-me.css';
import me from './images/temp_me.jpg'; 

const AboutMe = () => {
    return (
        <section id="aboutme">
            <div className="aboutme">
                <p className='intro'>Beyond my academic and professional pursuits, I try to maintain a healthy work-school-life balance through hobbies</p>
                <p className='phrase'>For me, this means <b>music, cooking, reading, and traveling</b>!</p>
                <div className='boxes'>
                    <img src={me} alt='me' className='box box-music'/>
                    <img src={me} alt='me' className='box box-cooking'/>
                    <img src={me} alt='me' className='box box-reading'/>
                    <img src={me} alt='me' className='box box-traveling'/>
                </div>
                <div className='arrows'>
                    <div className='arrow arrow-music'></div>
                    <div className='arrow arrow-cooking'></div>
                    <div className='arrow arrow-reading'></div>
                    <div className='arrow arrow-traveling'></div>
                </div>
                <div className="music-vertical-1"></div>
                <hr className='music-horizontal'/>
                <div className="music-vertical-2"></div>
                <div className="cooking-vertical-1"></div>
                <hr className='cooking-horizontal'/>
                <div className="cooking-vertical-2"></div>
                <div className="reading-vertical-1"></div>
                <hr className='reading-horizontal'/>
                <div className="reading-vertical-2"></div>
                <div className="traveling-vertical-1"></div>
                <hr className='traveling-horizontal'/>
                <div className="traveling-vertical-2"></div>
            </div>
        </section>  
    )
}

export default AboutMe; 