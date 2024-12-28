import React from 'react'; 
import './projects.css'; 
import {Box, RadioCards, Flex, Text} from '@radix-ui/themes'; 

const myProjects = [
  {id: 1, name: 'Personal Website', demo: 'https://github.com/k2pe{reir/personal-website', description: 'Created with React and deployed with GitHub Pages. This website is a showcase of my projects and skills'},
  {id: 2, name: 'SignQuest', demo: 'https://youtu.be/KXfTq8JxxY8', description: 'Created with Python, HTML, and CSS, this project is a sign language learning game that implements the MediaPipe Hand Landmarker task and OpenCV'},
  {id: 3, name: 'Sewstainability', demo: 'https://github.com/k2pereir/technova_project', description: 'Created with Python and Streamlit, this projects promotes sustainable fashion with an online closet, thrift store, and outfit-repeat tracker'},
  {id: 4, name: 'Rock, Paper, Scissors', demo: 'https://github.com/k2pereir/rockpaperscissors', description: 'My current project is in Python and uses the MediaPipe Hand Landmarking and OpenCV to create a single player rock paper scissors game'},
  {id: 5, name: 'Financial Tracker', demo: 'link', description: 'Made with Excel Macros and VBA, this project is a comprehensive financial tracker'},
  {id: 6, name: 'Varos', demo: 'https://github.com/milkman9999/jamhaxors1', description: 'Created with the OpenAI API, JavaScript, HTML, and CSS this project generates a personalized workout plan and diet based on user input'},
  {id: 7, name: 'Excelerate', demo: 'link', description: 'Made with Excel Macros and VBA, this decision support system creates comprehensive schedules based on user input'}
]

const Projects = () => {
  return (
      <section id='education'>
        <p className='title'>Here are some of my projects!</p>
         <Box maxWidth='1100px'>
          <RadioCards.Root defaultValue='1' color='crimson' size='3' columns={{initial: '1', sm: '4'}} style={{gap: '5rem'}}>
            <RadioCards.Item value = '1' style={{width: '120%'}}>
              <Flex direction='column' width='100%' >
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Personal Website
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='2' color='crimson' size='3'>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  SignQuest
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='3' color='crimson' size='3'>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Sewstainability
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='4' color='crimson' size='3' style={{width: '150%'}}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Rock, Paper, Scissors
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='5' color='crimson' size='3' style={{width: '120%'}}>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Financial Tracker
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='6' color='crimson' size='3'>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Varos
                </Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value='7' color='crimson' size='3'>
            < Flex direction='column' width='100%'>
                <Text weight='bold' style={{fontSize: '30px'}}>
                  Excelerate
                </Text>
              </Flex>
            </RadioCards.Item>
          </RadioCards.Root>
         </Box>
      </section>
  )
}

export default Projects 