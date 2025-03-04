import React from 'react';
import Chatbot from './Chatbot'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Support Agent Chatbot for CDP</h1>
      </header>
      <div className="chatbot-container">
        <Chatbot />  
      </div>
    </div>
  );
}

export default App;