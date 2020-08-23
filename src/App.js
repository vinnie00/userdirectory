import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataArea from './components/dataArea';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <DataArea />
    </div>
  );
}

export default App;
