import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import userLogged from '../actions';
import style from './login.css';

class Login extends Component {
	state = {
		login: '',
		password: '',
		error: '',

	};

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { login, password } = this.state;
		const { onSubmit } = this.props;
		if ((login.length && password.length) < 3) {
			return;
		}
		this.validateUser();
		const data = { login, password };
		onSubmit(data);
		this.setState({
			login: '',
			password: '',
		});
	};

	validateUser() {
		const { login, password } = this.state;
		const { history } = this.props;
		if (login !== 'Admin' && password !== '12345') {
			this.setState({ error: 'Имя пользователя или пароль введены не верно ' });
		} else {
			localStorage.setItem('isLogged', 'true');
			history.push('/profile');
		}
	}

	render() {
		const { login, password, error } = this.state;
		if (!localStorage.getItem('isLogged')) {
			return (
				<div className={style.login}>
					<form className={style.form} onSubmit={this.onSubmit}>
						{error ? <p className={style.error}>{error}</p> : null}
						<label className={style.label}>пользователь</label>
						<input
							type="text"
							className={style.input}
							placeholder="Введите ваш логин"
							name="login"
							value={login}
							onChange={this.onChange}
						/>
						<label className={style.label}>пароль</label>
						<input
							type="password"
							className={style.input}
							placeholder="Введите ваш пароль"
							name="password"
							value={password}
							onChange={this.onChange}
						/>
						<button type="submit" className={style.btn}>войти</button>
					</form>
				</div>
			);
		}
		return <Redirect to="/profile" />;
	}
}

Login.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	history: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};


const mapDispatchToProps = {
	onSubmit: userLogged,
};

export default connect(null, mapDispatchToProps)(Login);
