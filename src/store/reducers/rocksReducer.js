import * as actionTypes from "../actions/actions";
import rocksServices from "../../services/rocks";

const initialState = [];

const rocksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INIT_ROCKS:
			return action.data;
		default:
			return state;
	}
};

export const initializeRocks = () => {
	return async (dispatch) => {
		const rocks = await rocksServices.getAll();
		dispatch({
			type: actionTypes.INIT_ROCKS,
			data: rocks,
		});
	};
};

export default rocksReducer;
