import './App.css';
import Navbar from './components/navbar';
import React from 'react'; 
import Intro from './components/intro'; 
import AboutMe from './components/aboutme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <AboutMe/>
    </div>
  );
}

export default App;