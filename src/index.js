import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import quotes from './quotes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App quotes={quotes} />, document.getElementById('root'));
registerServiceWorker();
