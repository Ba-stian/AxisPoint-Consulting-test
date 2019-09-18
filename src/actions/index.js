const userLogged = data => ({
	type: 'USER_LOGGED',
	payload: data,
});

const requestNews = news => ({
	type: 'REQUEST_NEWS',
	payload: news,
});

export { userLogged, requestNews };
