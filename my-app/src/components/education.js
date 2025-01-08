import React from 'react'; 
import './education.css'; 
import grad from './education-images/grad.jpg'; 
import waterloo from './education-images/waterloo.jpg';

const Education = () => {
    return (
        <section id='edu'>
            <h1 className='edu-title'>My Education</h1>
            <div className='timeline'>
                <div className='contain highschool'>
                    <div className='content'>
                        <h3 className='year'>2020-2024</h3>
                        <p className='edu-type'>Resurrection Catholic Secondary School</p>
                        <p className='point'>Academics</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>Grade 12 average of 98%</li>
                            <li>Attained the top score of 5 on the AP English Literature and Composition and AP Calculus AB exams</li>
                        </ul>
                        <p className='point'>Extracurriculars</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>President and founder of the school newspaper</li>
                            <li>Co-president and co-founder of the Artifical Intelligence club</li>
                            <li>President of DECA</li>
                            <li>General member of the student activities council, robotics team, social justice club, concert band, show choir, drama club, book club, and trivia club</li>
                        </ul>
                        <p className='point'>Awards</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>Ontario Scholar</li>
                            <li>Robert Fitzpatrick Memorial Scholarship</li>
                            <li>Advanced Functions Award of Excellence</li>
                            <li>Volunteerism Community Award</li>
                        </ul>
                    </div>
                    <img className='highschool-grad' src={grad} alt='graduation'/>
                </div>
                <div className='contain university'>
                    <div className='content2'>
                        <h3 className='year'>2024-2029</h3>
                        <p className='edu-type'> University of Waterloo</p>
                        <p className='degree'> Bachelor of Applied Sciences in Management Engineering</p>
                        <p className='point'>Academics</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>CGPA of 3.95</li>
                            <li>Relevent coursework in Programming in Python, Calculus, Linear Algebra, Electrical Circuits, Mechanics, Work Design and Facilities Planning</li>
                        </ul>
                        <p className='point'>Extracurriculars</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>Rocketry Design Team
                                <ul className='more-point-details' style={{listStyleType:'circle', paddingLeft: '20px'}}>
                                    <li>Recovery subteam</li>
                                    <li>Designing energy modulators to decrease load on main deployment</li>
                                    <li>Gained experience in engineering design, testing, and analysis</li>
                                </ul>
                            </li>
                            <li>Industry 4.0 Design Team
                                <ul className='more-point-details' style={{listStyleType:'circle', paddingLeft: '20px'}}>
                                    <li>Technical writer on the Operations subteam</li>
                                    <li>Write monthly issues for a newsletter focusing on Software and Management Engineering concepts</li>
                                    <li>Gained experience in technical writing and cross-functional collaboration</li>
                                </ul>
                            </li>
                            <li>UW Cooking Club
                                <ul className='more-point-details' style={{listStyleType:'circle', paddingLeft: '20px'}}>
                                    <li>Assisted in event planning and execution as Event Support</li>
                                    <li>Bake goods to be sold for fundraising as Club Baker</li>
                                </ul>
                            </li>
                        </ul>
                        <p className='point'>Awards</p>
                        <ul className='point-details' style={{listStyleType:'disc', paddingLeft: '20px'}}>
                            <li>President's Scholarship of Distinction</li>
                            <li>Kothari Family FIRST Alumni Entrance Scholarship</li>
                            <li>Ricoh Canada's Jane Padwick Scholarship</li>
                        </ul>
                    </div>
                    <img className='waterloo-sign' src={waterloo} alt='waterloo'/>
                </div>
            </div>  
        </section>
        
    )
}

export default Education; 