import * as actionTypes from "../actions/actions";

const initialState = {
	rocks: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INIT_ROCKS:
			return { ...state, rocks: action.data };
		default:
			return state;
	}
};

export const initializeRocks = () => {
	return async (dispatch) => {
		// const rocks = await rocksServices.getAll();
		const rocks = [];
		dispatch({
			type: actionTypes.INIT_ROCKS,
			data: rocks,
		});
	};
};

export default reducer;