import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  handleNewQuoteClick() {
    this.props.onNewQuoteClick();
  }

  render() {
    const {quote, from} = this.props;
    const toTweet = `${quote} -${from}`;
    const tweetIntentUrl
      = `https://twitter.com/intent/tweet?text=${encodeURIComponent(toTweet)}`;

    return (
      <div className="Controls">
        <button
          className="Controls-btn"
          onClick={this.handleNewQuoteClick}>New Quote</button>
        <a
          className="Controls-btn"
          href={tweetIntentUrl}
          target="_blank"
          rel="noopener nofollow">Tweet</a>
      </div>
    );
  }
}

export default Controls;
