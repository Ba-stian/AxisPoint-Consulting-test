import loginReducer from './loginReducer';
import fetchNewsReducer from './requestNewsReducer';

const reducer = (state, action) => ({
	...loginReducer(state, action),
	...fetchNewsReducer(state, action),
});

export default reducer;
