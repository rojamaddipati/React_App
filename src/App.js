import React from 'react';
import './App.css';
import Clock from './Components/Clock.jsx';
import Toggle from './Components/Toggle.jsx';
import Login from './Components/Login.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Clock/>
       <Toggle/>
       <Login/>
      </header>
    </div>
  );
}

export default App;
