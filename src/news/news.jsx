import React from 'react';
import PropTypes from 'prop-types';
import style from './news.css';

const News = ({ news }) => (
	<div className={style.news}>
		<div className={style.columns}>
			{news.map(({ id, title, content }) => (
				<div className={style.column} key={id}>
					<img
						src={`https://picsum.photos/300/200?random=${id}`}
						alt="fish"
						className={style.pic}
					/>
					<div className={style.column_content}>
						<h2 className={style.column_title}>{title}</h2>
						<p className={style.content}>{content}</p>
					</div>
				</div>
			))}
		</div>
	</div>
);

News.propTypes = {
	news: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};


export default News;
