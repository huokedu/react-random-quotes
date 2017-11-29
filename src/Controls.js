import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  handleNewQuoteClick() {
    this.props.onNewQuoteClick();
  }

  render() {
    return (
      <div className="Controls">
        <button onClick={this.handleNewQuoteClick}>New Quote</button>
        <button>Tweet</button>
      </div>
    );
  }
}

export default Controls;
