import React from 'react';
import './App.css';
import BreweriesContainer from './components/BreweriesContainer'

const App: React.FC = () => {
  return (
    <div>
      <h1>Brewery App</h1>
      <BreweriesContainer />
    </div>
  );
}

export default App;