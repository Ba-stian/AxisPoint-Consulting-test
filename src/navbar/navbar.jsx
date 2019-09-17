import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from './navbar.css';

const Navbar = () => (
	<nav className={navbar.nav}>
		<ul className={navbar.nav_items}>
			<NavLink exact to="/" className={navbar.navlink} activeClassName={navbar.active}>
				<li>home</li>
			</NavLink>
			<NavLink to="/news" className={navbar.navlink} activeClassName={navbar.active}>
				<li>news</li>
			</NavLink>
			<NavLink to="/profile" className={navbar.navlink} activeClassName={navbar.active}>
				<li>profile</li>
			</NavLink>
		</ul>
	</nav>
);

export default Navbar;
