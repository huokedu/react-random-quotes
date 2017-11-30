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
        {/* The <a>'s href will be set dynamically */}
        <a target="_blank" rel="noopener nofollow">Tweet</a>
      </div>
    );
  }
}

export default Controls;
