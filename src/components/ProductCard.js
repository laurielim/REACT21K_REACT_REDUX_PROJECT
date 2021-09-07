import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
	return (
		<div>
			<h3>Rock name</h3>
			<img src='' alt='type of rock' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ducimus.
			</p>
			<Link to={`/products/1}`}>See Rock</Link>
		</div>
	);
};

export default ProductCard;
