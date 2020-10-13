import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact name="Rosa Newman"
               avatar="https://randomuser.me/api/portraits/women/15.jpg"
               online
               />
      <Contact name="Olivia Masone"
               avatar="https://randomuser.me/api/portraits/women/35.jpg"
               
               />
      <Contact name="Howard Reyes"
               avatar="https://randomuser.me/api/portraits/men/6.jpg"
               online
               />
    </div>
  );
}

export default App;
