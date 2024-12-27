import React from 'react'; 
import './education.css'; 

const Education = () => {
    return (
        <section id="education">
            <div className="uni">
                <span className="degree">
                    I'm studying Management Engineering at the University of Waterloo  
                </span>
                <ul style={{listStyleType:'disc', paddingLeft: '20px'}}>
                    <li>It's similar to Industrial Engineering but focuses on the optimization of digital systems</li>
                    <li>The co-op program means I get six work terms to gain practical experience</li>
                    <li>I have a CGPA of 3.95</li>
                </ul>
                <span className="involvement">
                    Extracurricular Involvement: 
                </span>
                <ul style={{listStyleType:'disc', paddingLeft: '20px'}}>
                    <li>UW Rocketry Design Team
                        <ul style={{listStyleType:'circle', paddingLeft: '20px'}}>
                            <li>I'm on the Recovery subteam</li>
                            <li>I'm designing energy modulators to decrease the load on main deployment </li>
                            <li>I've gained hands on experience in <i>engineering design, testing, and analysis</i></li>
                        </ul>
                    </li>
                    <li>Industry 4.0 Design Team
                        <ul style={{listStyleType:'circle', paddingLeft: '20px'}}>
                            <li>I'm the Technical Writer on the Operations subteam</li>
                            <li>I write monthly issues for a newsletter based on Software and Industrial Engineering concepts</li>
                            <li>I've gained experience in <i>technical writing and cross-functional collaboration</i></li>
                        </ul>
                    </li>
                    <li>UW Cooking Club
                        <ul style={{listStyleType:'circle', paddingLeft: '20px'}}>
                            <li>As Event Support I assisted in event planning and execution</li>
                            <li>Now, as Club Baker I will bake goods to be sold for fundraising</li>
                            <li>I've gained experience in <i>event planning, management, and organization</i></li>
                        </ul>
                    </li>
                </ul>
                <span className="awards">
                    Awards and Achievements: 
                </span>
                <ul style={{listStyleType:'disc', paddingLeft: '20px'}}>
                    <li>President's Scholarship - entrance award for students with an applying average over 95%</li>
                    <li>Kothari Family FIRST Alumni Entrance Scholarship - awarded on the basis of academic performance, online video interview, admission information form, and participation in a FIRST robotics team</li>
                </ul>
            </div>
        </section>   
        
    )
}

export default Education; 