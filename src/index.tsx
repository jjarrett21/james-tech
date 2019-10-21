import React from 'react';
import ReactDOM from 'react-dom';

import ConfettiHeader from './components/ConfettiHeader';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConfettiHeader />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
