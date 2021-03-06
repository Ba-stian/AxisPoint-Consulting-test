import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (localStorage.getItem('isLogged')
			? <Component {...props} /> : (
				<Redirect to="/login" />
			))}
	/>
);

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired,
};

export { PrivateRoute as default };
