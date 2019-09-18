const initialState = {
	news: [],
};

const requestNewsReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'REQUEST_NEWS':
		return {
			news: action.payload,
		};
	default:
		return state;
	}
};

export default requestNewsReducer;
