import React from 'react';
import './about-me.css';
import {useState} from 'react';
import floralCake from './about-me-images/floral_cake.jpg';
import layerCake from './about-me-images/layer_cake.jpg';
import naan from './about-me-images/naan.JPG';
import pretzels from './about-me-images/pretzels.jpg';
import pasta from './about-me-images/uncooked_tortellini.jpg';
import annotation from './about-me-images/annotation.jpg';
import book from './about-me-images/book_and_tea.jpg';
import jane from './about-me-images/jane_austen.jpg';
import forest from './about-me-images/forest_brims_over.jpg';
import pose from './about-me-images/pose.jpg';
import lotr from './about-me-images/lotr.jpg';
import snow from './about-me-images/snow.jpg';
import grass from './about-me-images/grass.jpg';
import orchestra from './about-me-images/orchestra.jpg';

const AboutMe = () => {
    const [musicIndex, setMusicIndex] = useState(0);
    const [cookingIndex, setCookingIndex] = useState(0);
    const [readingIndex, setReadingIndex] = useState(0);
    const [travelingIndex, setTravelingIndex] = useState(0);

    const musicImages = [orchestra];
    const cookingImages = [pasta, layerCake, naan, floralCake, pretzels];
    const readingImages = [jane, book, annotation, forest];
    const travelingImages = [pose, snow, lotr, grass];

    const handleImageChange = (setIndex, index, totalImages) => {
        console.log(`Current index: ${index}, Total images: ${totalImages}`);
        setIndex(prevIndex => {
            const newIndex = prevIndex === totalImages - 1 ? 0 : prevIndex + 1;
            console.log(`New index: ${newIndex}`); 
            return newIndex;
        });
    };
    
    return (
        <section id="aboutme">
            <div className="aboutme">
                <h1 className='about-me-title'>About Me</h1>
                <p className='intro'>Beyond my academic and professional pursuits, I try to maintain a healthy work-school-life balance through hobbies</p>
                <p className='phrase'>For me, this means <b>music, cooking, reading, and traveling</b>!</p>
                <div className='boxes'>
                    <div className='box box-music'>
                        <img src={musicImages[musicIndex]} alt='music' className='carousel-image'/>
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
            </div> 
        </section>  
    )
}

export default AboutMe;
