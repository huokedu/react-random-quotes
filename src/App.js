import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedQuoteIndex: 0};
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  setSelectedQuoteIndex() {
    this.setState((prevState, props) => ({
      selectedQuoteIndex: ~~(Math.random() * props.quotes.length)
    }));
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
        <header className="App-header">
          <h1 className="App-title">Random Quotes</h1>
        </header>
        <Quote quote={quote} from={from} />
        <Controls onNewQuoteClick={this.handleNewQuoteClick} />
      </div>
    );
  }
}

export default App;
