import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Controls from './Controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Quotes</h1>
        </header>
        <Quote quote="An inspiring quote" />
        <Controls />
      </div>
    );
  }
}

export default App;
