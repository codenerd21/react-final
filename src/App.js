import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MatchBoard from './components/MatchBoard/MatchBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">GA Dates</header>
        <Route component={MatchBoard} />
      </div>
    );
  }
}

export default App;

