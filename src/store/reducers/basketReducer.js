import * as actionTypes from "../actions/actions";
// import rocksServices from "../../services/rocks";

const initialState = {
	totalCost: 0,
	basketItems: [],
};

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_BASKET:
			return { ...state };
		case actionTypes.REMOVE_FROM_BASKET:
			return { ...state };
		default:
			return state;
	}
};

export default basketReducer;
