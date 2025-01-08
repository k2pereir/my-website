import React from 'react'; 
import './projects.css'; 
import {Box, RadioCards, Flex, Text} from '@radix-ui/themes'; 
import {useState} from 'react'; 
import personalWeb from './projects-images/personal_web.png';
import signQuest from './projects-images/sign.png'; 
import sewstain from './projects-images/sewstainability.png';
import rps from './projects-images/rps.png';
import financialtracker from './projects-images/financialtracker.png'; 
import varos from './projects-images/varos.png'; 

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null); 

  const getMessage = () => {
    if (selectedProject === 'Personal Website') {
      return <div className='container'>
        <p className='name'>Personal Website</p>
        <a className='link' href="https://github.com/k2pereir/my-website">Follow along here!</a>
        <img className='image' src={personalWeb} alt='temp'></img>
        <p className='description'>This website was built using React, with the backend developed in JavaScript and the frontend styled with CSS. It was deployed using GitHub Pages and serves as a showcase of my projects and skill sets.</p>
      </div>; 
    } else if (selectedProject === 'SignQuest') {
      return <div className='container'>
        <p className='name'>SignQuest</p>
        <a className='link' href="https://youtu.be/KXfTq8JxxY8">Watch the pitch video!</a>
        <a className='link2' href="https://github.com/ohi-711/jamhacks8project">Take a look at the code!</a>
        <img className='image' src={signQuest} alt='singQuest'></img>
        <p className='description'>SignQuest is a web application with a Python backend that generates a word from a predetermined list, prompting the user to demonstrate its sign language representation. It uses OpenCV to access the camera and MediaPipe's Hand Landmarking to verify the correctness of the sign. The frontend was developed using HTML and CSS.</p>
      </div>;
    } else if (selectedProject === 'Sewstainability') {
      return <div className='container'>
      <p className='name'>Sewstainability</p>
      <a className='link' href="https://youtu.be/_IGU8IxzBbA">Watch the demo video!</a>
      <a className='link2' href='https://github.com/k2pereir/technova_project'>Take a look at the code!</a>
      <img className='image' src={sewstain} alt='sewstainability'></img>
      <p className='description'>Sewstainability was created with Python and Streamlit for frontend styling. It promotes sustainable fashion with an online closet which users can track how often they reuse pieces, a thrift store where users can sell items they no longer use, and a virtual garden to incentivise the repetition of outfits.</p>
    </div>;
    } else if (selectedProject === 'Rock, Paper, Scissors') {
      return <div className='container'>
      <p className='name'>Rock, Paper, Scissors</p>
      <a className='link' href="https://github.com/k2pereir/rockpaperscissors">Follow along here!</a>
      <img className='image' src={rps} alt='rock, paper, scissors'></img>
      <p className='description'>My current project uses OpenCV to access the camera and collect information through MediaPipe Hand Landmarking on hand positions for rock, paper, and scissors. Data augmentation techniques such as scaling, flipping, and rotating are applied to extend the dataset and will be used to train a model to recognize rock, paper, and scissor gestures to create a single player version of the game.</p>
    </div>;
    } else if (selectedProject === 'Financial Tracker') {
      return <div className='container'>
      <p className='name'>Financial Tracker</p>
      <a className='link' href="https://youtu.be/S5iEzmtLn5A">Watch the demo video!</a>
      <img className='image1' src={financialtracker} alt='financial tracker'></img>
      <p className='description'>This financial tracker was made with Excel Macros and VBA. It contains a income and expense tracker, comprehensive breakdown of spendings, predictions for future spendings, a virtual savings jar with the ability to track savings goals, and a financial advice feature with hyperlinks to resources based on the user’s current financial state.</p>
    </div>;
    } else if (selectedProject === 'Varos') {
      return <div className='container'>
      <p className='name'>Varos</p>
      <a className='link' href="https://github.com/milkman9999/jamhaxors1">Take a look at the code!</a>
      <img className='image' src={varos} alt='varos'></img>
      <p className='description'>Made with JavaScript, the OpenAI API, HTML, and CSS, Varos generates a custom workout and diet plan based on user inputted information.</p>
    </div>;
    }
  }

  return (
      <section id='projects'>
        <h1 className='projects-title'>My Projects</h1>
        <p className='subheading'>Click on a project to learn more, click again to close</p>
         <Box maxWidth='1100px' style={{margin: '0 auto', textAlign: 'center'}} >
          <RadioCards.Root defaultValue='1' size='3' columns={{initial: '1', sm: '3'}} style={{gap: '5rem'}}>
            <RadioCards.Item value = '1' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('Personal Website')}>
              <Flex direction='column' width='68%' >
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Personal Website
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='2' size='3' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('SignQuest')}>
            < Flex direction='column' width='42%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  SignQuest
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='3' size='3' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('Sewstainability')}>
            < Flex direction='column' width='58%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Sewstainability
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='4' size='3' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('Rock, Paper, Scissors')}>
            < Flex direction='column' width='85%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Rock, Paper, Scissors
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='5' size='3' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('Financial Tracker')}>
            < Flex direction='column' width='68%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Financial Tracker
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='6' size='3' style={{width: '110%', outline: '2px solid white'}} onClick={() => setSelectedProject('Varos')}>
            < Flex direction='column' width='28%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Varos
                </Text>
              </Flex>
            </RadioCards.Item>
          </RadioCards.Root>

          {selectedProject && (
            <div 
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'absolute',
              border: '2px',
              borderColor: 'rgb(249, 217, 241)', 
              width: '40vw', 
              height: '35vw',
              minHeight: '450px',
              maxHeight: '700px',
              backgroundColor: 'rgb(113, 113, 113)',
              marginTop: '-15%',
              marginLeft: '15%',
              borderRadius: '10px',
              borderColor: 'rgb(249, 217, 241)',
              boxShadow: '0 4px 8px rgb(249, 217, 241)',
              color: 'rgb(33, 34, 34)',
              zIndex: 9999,
              }}>
              <p>{getMessage()}</p>
            </div>
          )}
         </Box>
      </section>
  )
} 

export default Projects 