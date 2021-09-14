export const INIT_ROCKS = "INIT_ROCKS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const addToBasket = (product) => {
	console.log(product.title);
	return (dispatch) => {
		dispatch({ type: ADD_TO_BASKET, data: product });
	};
};

export const removeFromBasket = (id, price) => ({
	type: REMOVE_FROM_BASKET,
	id: id,
	price,
});
