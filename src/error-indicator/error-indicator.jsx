import React from 'react';
import style from './error-indicator.css';

const ErrorIndicator = () => (
	<div className={style.text}>
		<p>Кажется что-то пошло не так</p>
		<p>Но мы уже решаем эту проблему</p>
	</div>
);

export default ErrorIndicator;
