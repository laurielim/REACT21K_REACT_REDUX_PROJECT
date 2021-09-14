import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductsPreview = () => {
	const rocks = useSelector((state) => state.rocks);

	const rockSample = rocks.sort(() => 0.5 - Math.random()).slice(0, 4);
	return (
		<section>
			<h3>Our Products</h3>
			<ul>
				{rockSample.map((rock) => (
					<li key={rock.id}>
						<ProductCard rock={rock} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProductsPreview;
