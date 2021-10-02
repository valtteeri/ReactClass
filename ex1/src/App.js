import './App.css';
import React from 'react'
import Header from './Header';
import Highlights from './Highlights';
import News from './News';
function App() {
  return (
    <div className="App">
      <Header />
      <Highlights />
      <News />
    </div>
  );
}

export default App;