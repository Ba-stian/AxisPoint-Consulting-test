const initialState = {
	login: '',
	password: '',
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'USER_LOGGED':
		return {
			...action.payload,
		};
	default:
		return state;
	}
};

export default loginReducer;
