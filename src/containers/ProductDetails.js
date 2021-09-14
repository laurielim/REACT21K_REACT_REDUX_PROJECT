import { useEffect, useState } from "react";
import rocksServices from "../services/rocks";
import { useDispatch } from "react-redux";

import { addToBasket } from "../store/actions/actions";
import ProductsPreview from "./ProductsPreviewContainer";

const ProductDetails = ({ id }) => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			const data = await rocksServices.getSingleRock(id);
			setProduct(data);
		};
		fetchData();
	}, [id]);

	return Object.keys(product).length === 0 ? (
		<div>Loading...</div>
	) : (
		<>
			<section>
				<img src={product.image} alt={product.title} />
				<h2>{product.title}</h2>
				<p>{product.price} €</p>
				<p>{product.description}</p>
				<button>Buy Now</button>
				<button onClick={() => dispatch(addToBasket(product))}>
					Add To Cart
				</button>
			</section>
			<section>
				<ProductsPreview />
			</section>
		</>
	);
};

export default ProductDetails;
