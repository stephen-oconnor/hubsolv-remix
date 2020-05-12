import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './components/App/App';
import './styles/app.module.scss';

if (process.env.NODE_ENV !== 'production') {
	var axe = require('react-axe'); // eslint-disable-line no-var
	axe(React, ReactDOM, 1000);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app')
);
