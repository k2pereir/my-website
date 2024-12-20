import './App.css';
import Navbar from './components/navbar';
import React from 'react'; 
import Me from './components/me'; 

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <h2>!</h2>
      <Navbar/>
      <Me/>
    </div>
  );
}

export default App;