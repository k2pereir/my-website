import './App.css';
import React from 'react'; 
import Intro from './components/intro'; 
import AboutMe from './components/about-me';
import Education from './components/education'; 
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Education/>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;