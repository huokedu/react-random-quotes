import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <p className="Quote">
        {this.props.quote}
      </p>
    );
  }
}

export default Quote;
