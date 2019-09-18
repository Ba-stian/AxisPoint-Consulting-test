import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profile from './profile.css';

const Row = ({ content, label }) => (
	<div className={profile.row}>
		<label className={profile.label}>{label}</label>
		<p className={profile.content}>{content}</p>
	</div>
);


class Profile extends Component {
	logout = () => {
		const { history } = this.props;
		localStorage.removeItem('isLogged');
		history.push('/');
	};

	render() {
		return (
			<div className={profile.profile}>
				<h1 className={profile.header}>Ваш профиль</h1>
				<img src="https://picsum.photos/300/300?random=1" alt="me" />
				<Row label="Имя" content="Иван" />
				<Row label="Фамилия" content="Петров" />
				<Row label="О себе" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius excepturi fugiat quia!" />
				<div className={profile.btn_group}>
					<button type="button" className={profile.btn} onClick={this.logout}>выйти</button>
				</div>
			</div>
		);
	}
}


Row.propTypes = {
	content: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

Profile.propTypes = {
	history: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};


export default Profile;
