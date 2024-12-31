import React from 'react';
import './about-me.css';
import me from './images/temp_me.jpg';
import home from './images/temp.png';
import sign from './images/sign.png';
import {useState} from 'react';


const AboutMe = () => {
    const [musicIndex, setMusicIndex] = useState(0);
    const [cookingIndex, setCookingIndex] = useState(0);
    const [readingIndex, setReadingIndex] = useState(0);
    const [travelingIndex, setTravelingIndex] = useState(0);

    const musicImages = [me, home, sign];
    const cookingImages = [me, home, sign];
    const readingImages = [me, home, sign];
    const travelingImages = [me, home, sign];

    const handleImageChange = (setIndex, index, totalImages) => {
        console.log(`Current index: ${index}, Total images: ${totalImages}`);
        setIndex(prevIndex => {
            const newIndex = prevIndex === totalImages - 1 ? 0 : prevIndex + 1;
            console.log(`New index: ${newIndex}`); 
            return newIndex;
        });
    };
    
;
    return (
        <section id="aboutme">
            <div className="aboutme">
                <p className='intro'>Beyond my academic and professional pursuits, I try to maintain a healthy work-school-life balance through hobbies</p>
                <p className='phrase'>For me, this means <b>music, cooking, reading, and traveling</b>!</p>
                <div className='boxes'>
                    <div className='box box-music'>
                        <img src={musicImages[musicIndex]} alt='music' className='carousel-image'/>
                        <div className='carousel-buttons'>
                            <button className='arrow-left' onClick={() => handleImageChange(setMusicIndex, musicIndex, musicImages.length)}>&#8592;</button>
                            <button className='arrow-right' onClick={() => handleImageChange(setMusicIndex, musicIndex, musicImages.length)}>&#8594;</button>
                        </div>
                    </div>
                    <div className='box box-cooking'>
                        <img src={cookingImages[cookingIndex]} alt='cooking' className='carousel-image'/>
                        <div className='carousel-buttons'>
                            <button className='arrow-left' onClick={() => handleImageChange(setCookingIndex, cookingIndex, cookingImages.length)}>&#8592;</button>
                            <button className='arrow-right' onClick={() => handleImageChange(setCookingIndex, cookingIndex, cookingImages.length)}>&#8594;</button>
                        </div>
                    </div>
                    <div className='box box-reading'>
                        <img src={readingImages[readingIndex]} alt='reading' className='carousel-image'/>
                        <div className='carousel-buttons'>
                            <button className='arrow-left' onClick={() => handleImageChange(setReadingIndex, readingIndex, readingImages.length)}>&#8592;</button>
                            <button className='arrow-right' onClick={() => handleImageChange(setReadingIndex, readingIndex, readingImages.length)}>&#8594;</button>
                        </div>
                    </div>
                    <div className='box box-traveling'>
                        <img src={travelingImages[travelingIndex]} alt='traveling' className='carousel-image'/>
                        <div className='carousel-buttons'>
                            <button className='arrow-left' onClick={() => handleImageChange(setTravelingIndex, travelingIndex, travelingImages.length)}>&#8592;</button>
                            <button className='arrow-right' onClick={() => handleImageChange(setTravelingIndex, travelingIndex, travelingImages.length)}>&#8594;</button>
                        </div>
                    </div> 
                </div>
                <div className='pointers'>
                    <div className='point point-music'></div>
                    <div className='point point-cooking'></div>
                    <div className='point point-reading'></div>
                    <div className='point point-traveling'></div>
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
