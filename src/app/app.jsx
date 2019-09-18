import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize-css';
import app from './app.css';
import Navbar from '../navbar';
import Profile from '../profile';
import NewsContainer from '../news';
import PrivateRoute from '../hoc-helpers';
import Home from '../home';
import Login from '../login';

const App = () => (
	<div className={app.app}>
		<div className={app.container}>

			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/news" component={NewsContainer} />
				<Route path="/login" component={Login} />
				<PrivateRoute component={Profile} />
			</Switch>
		</div>
	</div>
);

export default App;
