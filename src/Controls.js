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
          onClick={this.handleNewQuoteClick}>
            <span className="fa fa-quote-left fa-fw" aria-hidden="true"></span>
            New Quote
        </button>
        <a
          className="Controls-btn"
          href={tweetIntentUrl}
          target="_blank"
          rel="noopener nofollow">
            <span className="fa fa-twitter fa-fw" aria-hidden="true"></span>
            Tweet
        </a>
      </div>
    );
  }
}

export default Controls;
