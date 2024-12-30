import React from 'react'; 
import './projects.css'; 
import {Box, RadioCards, Flex, Text} from '@radix-ui/themes'; 
import {useState} from 'react'; 
import personalWeb from './images/temp.png';
import signQuest from './images/sign.png'; 
import sewstain from './images/sewstainability.png';
import rps from './images/rps.png';
import financialtracker from './images/financialtracker.png'; 
import varos from './images/varos.png'; 

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null); 

  const getMessage = () => {
    if (selectedProject === 'Personal Website') {
      return <div className='container'>
        <p className='name'>Personal Website</p>
        <a className='link' href="https://github.com/k2pereir/my-website">Follow along here!</a>
        <img className='image' src={personalWeb} alt='temp'></img>
        <p className='description'>Created with React and deployed with GitHub Pages. This website is a showcase of my projects and skills</p>
      </div>; 
    } else if (selectedProject === 'SignQuest') {
      return <div className='container'>
        <p className='name'>SignQuest</p>
        <a className='link' href="https://youtu.be/KXfTq8JxxY8">Watch the pitch video!</a>
        <a className='link2' href="https://github.com/ohi-711/jamhacks8project">Take a look at the code!</a>
        <img className='image' src={signQuest} alt='singQuest'></img>
        <p className='description'>Created with Python, HTML, and CSS, this project is a sign language learning game that implements the MediaPipe Hand Landmarker task and OpenCV</p>
      </div>;
    } else if (selectedProject === 'Sewstainability') {
      return <div className='container'>
      <p className='name'>Sewstainability</p>
      <a className='link' href="https://youtu.be/_IGU8IxzBbA">Watch the demo video!</a>
      <img className='image' src={sewstain} alt='sewstainability'></img>
      <p className='description'>Created with Python and Streamlit, this projects promotes sustainable fashion with an online closet, thrift store, and outfit-repeat tracker</p>
    </div>;
    } else if (selectedProject === 'Rock, Paper, Scissors') {
      return <div className='container'>
      <p className='name'>Rock, Paper, Scissors</p>
      <a className='link' href="https://github.com/k2pereir/rockpaperscissors">Follow along here!</a>
      <img className='image' src={rps} alt='rock, paper, scissors'></img>
      <p className='description'>My current project is in Python and uses the MediaPipe Hand Landmarking and OpenCV to create a single player rock paper scissors game</p>
    </div>;
    } else if (selectedProject === 'Financial Tracker') {
      return <div className='container'>
      <p className='name'>Financial Tracker</p>
      <a className='link' href="https://youtu.be/S5iEzmtLn5A">Watch the demo video!</a>
      <img className='image' src={financialtracker} alt='financial tracker'></img>
      <p className='description'>Made with Excel Macros and VBA, this project is a comprehensive financial tracker</p>
    </div>;
    } else if (selectedProject === 'Varos') {
      return <div className='container'>
      <p className='name'>Varos</p>
      <a className='link' href="https://github.com/milkman9999/jamhaxors1">Take a look at the code!</a>
      <img className='image' src={varos} alt='varos'></img>
      <p className='description'>'Made with JavaScript, the OpenAI API, HTML, and CSS, this web application generates a custom workout and diet plan based on user input</p>
    </div>;
    }
  }

  return (
      <section id='projects'>
        <p className='title'>Here are some of my projects!</p>
        <p className='subheading'>Click on a project to learn more, click again to close</p>
         <Box maxWidth='1100px'>
          <RadioCards.Root defaultValue='1' size='3' columns={{initial: '1', sm: '4'}} style={{gap: '5rem'}}>
            <RadioCards.Item value = '1' style={{width: '120%'}} onClick={() => setSelectedProject('Personal Website')}>
              <Flex direction='column' width='100%' >
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Personal Website
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='2' size='3' onClick={() => setSelectedProject('SignQuest')}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  SignQuest
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='3' size='3' onClick={() => setSelectedProject('Sewstainability')}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Sewstainability
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='4' size='3' style={{width: '150%'}} onClick={() => setSelectedProject('Rock, Paper, Scissors')}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Rock, Paper, Scissors
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='5' size='3' style={{width: '120%'}} onClick={() => setSelectedProject('Financial Tracker')}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Financial Tracker
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='6' size='3' onClick={() => setSelectedProject('Varos')}>
            < Flex direction='column' width='100%'>
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
              border: '2px solid black', 
              width: '40rem', 
              height: '30rem',
              backgroundColor: 'rgb(252, 208, 218)',
              marginTop: '-200px',
              marginLeft: '300px',
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