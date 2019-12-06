import React from 'react';
import './App.css';
import CardWrapper from './components/CardWrapper';
import Filter from './components/Filter';
import Header from './components/Header';
import MagicCard from './components/MagicCard';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <CardWrapper />
    </div>
  );
}

export default App;
