import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

const ProductsContainer = () => {
	const rocks = useSelector((state) => state.rocks);
	return (
		<>
			<h3>All Products</h3>
			{rocks.map((rock) => (
				<ProductCard key={rock.id} rock={rock} />
			))}
		</>
	);
};

export default ProductsContainer;
