import React from "react";
import { useDispatch } from "react-redux";

import { removeFromBasket } from "../store/actions/actions";

const BasketItemSummary = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<h3>{item.title}</h3>{" "}
			<button onClick={() => dispatch(removeFromBasket(item.id, item.price))}>
				Remove From Cart
			</button>
		</div>
	);
};

export default BasketItemSummary;
