import * as actionTypes from "../actions/actions";

const initialState = {
	totalCost: 0,
	basketItems: [],
};

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_BASKET:
			return {
				totalCost: state.totalCost + action.data.price,
				basketItems: [...state.basketItems, action.data],
			};
		case actionTypes.REMOVE_FROM_BASKET:
			return {
				totalCost: state.totalCost - action.price,
				basketItems: state.basketItems.filter((item) => item.id !== action.id),
			};
		default:
			return state;
	}
};

export default basketReducer;
