import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedQuoteIndex: -1};
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  handleNewQuoteClick() {
    this.setState((prevState, props) => ({
      selectedQuoteIndex: ~~(Math.random() * props.quotes.length)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Quotes</h1>
        </header>
        <Quote quote="An inspiring quote" />
        <Controls onNewQuoteClick={this.handleNewQuoteClick} />
      </div>
    );
  }
}

export default App;
