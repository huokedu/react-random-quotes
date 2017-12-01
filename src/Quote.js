import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <blockquote className="Quote">
        <p className="Quote-quote">
          <span className="fa fa-quote-left fa-fw fa-lg"></span>
          {this.props.quote}
        </p>
        <p className="Quote-from">{this.props.from}</p>
      </blockquote>
    );
  }
}

export default Quote;
