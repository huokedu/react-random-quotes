import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Controls from './Controls';
import generateRandomIndex from './generateRandomIndex';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedQuoteIndex: -1};
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  setSelectedQuoteIndex() {
    this.setState((prevState, props) => {
      let selectedQuoteIndex = generateRandomIndex(props.quotes.length);
      while (selectedQuoteIndex === prevState.selectedQuoteIndex) {
        selectedQuoteIndex = generateRandomIndex(props.quotes.length);
      }
      return {selectedQuoteIndex};
    });
  }

  componentWillMount() {
    this.setSelectedQuoteIndex();
  }

  handleNewQuoteClick() {
    this.setSelectedQuoteIndex();
  }

  render() {
    const {selectedQuoteIndex} = this.state;
    const {quotes} = this.props;
    const {quote, from} = quotes[selectedQuoteIndex];

    return (
      <div className="App">
        <Controls
          quote={quote}
          from={from}
          onNewQuoteClick={this.handleNewQuoteClick} />
        <Quote quote={quote} from={from} />
      </div>
    );
  }
}

export default App;
