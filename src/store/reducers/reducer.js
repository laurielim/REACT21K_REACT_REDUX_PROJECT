import * as actionTypes from "../actions/actions";
import rocksServices from "../../services/rocks";

const initialState = {
	rocks: [],
	basket: {
		total: 0,
		products: [],
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INIT_ROCKS:
			return { ...state, rocks: action.data };
		case actionTypes.ADD_TO_BASKET:
			return { ...state };
		case actionTypes.REMOVE_FROM_BASKET:
			return { ...state };
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

export default reducer;
