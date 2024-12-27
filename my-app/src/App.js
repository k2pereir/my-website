import './App.css';
import Navbar from './components/navbar';
import React from 'react'; 
import Intro from './components/intro'; 
import AboutMe from './components/about-me';
import Education from './components/education'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Education/>
    </div>
  );
}

export default App;