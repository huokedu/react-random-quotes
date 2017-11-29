import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <blockquote className="Quote">
        <p className="Quote-quote">{this.props.quote}</p>
        <p className="Quote-from">{this.props.from}</p>
      </blockquote>
    );
  }
}

export default Quote;
