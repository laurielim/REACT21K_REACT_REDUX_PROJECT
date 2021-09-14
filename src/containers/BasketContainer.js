import React from "react";
import { useSelector } from "react-redux";

import BasketItemSummary from "../components/BasketItemSummary";

const Basket = () => {
	const basket = useSelector((state) => state.basket);

	return (
		<section>
			<ul>
				{basket.basketItems.map((item) => (
					<li key={item.id}>
						<BasketItemSummary item={item} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Basket;
