import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import News from './news';
import mockdata from './mockdata.json';
import { requestNews } from '../actions';

class NewsContainer extends Component {
	componentDidMount() {
		this.fetchNews();
	}

	fetchNews() {
		const randStart = Math.floor(Math.random() * 230);
		const news = mockdata.splice(randStart, 21);
		// eslint-disable-next-line react/destructuring-assignment
		this.props.requestNews(news);
	}

	render() {
		const { news } = this.props;
		return (
			<div>
				<News news={news} />
			</div>
		);
	}
}

NewsContainer.propTypes = {
	news: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
	requestNews: PropTypes.func.isRequired,
};


const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = {
	requestNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
