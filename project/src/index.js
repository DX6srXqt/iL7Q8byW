require('normalize.css');
require('styles/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
