import './App.css';
import React from 'react'; 
import Intro from './components/intro'; 
import AboutMe from './components/about-me';
import Education from './components/education'; 
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Education/>
      <Projects/>
      <AboutMe/>
    </div>
  );
}

export default App;