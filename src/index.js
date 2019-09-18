import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './error-boundry';
import App from './app';
import store from './store';

render(
	<Provider store={store}>
		<ErrorBoundry>
			<Router>
				<App />
			</Router>
		</ErrorBoundry>
	</Provider>, document.getElementById('root'),
);
