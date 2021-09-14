import React from "react";
import { useSelector } from "react-redux";

const BasketCounter = () => {
	const basketQuantity = useSelector(
		(state) => state.basket.basketItems.length
	);
	return <span>{basketQuantity}</span>;
};

export default BasketCounter;
