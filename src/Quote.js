import React, { Component } from 'react';

function Quote(props) {
  return (
    <p className="Quote">
      {props.quote}
    </p>
  );
}

export default Quote;
