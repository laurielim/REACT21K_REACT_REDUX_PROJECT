import { useEffect, useState } from "react";
import rocksServices from "../services/rocks";

const ProductDetails = ({ id }) => {
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
		<div>
			<h2>{product.title}</h2>
			<p>{product.price} €</p>
			<p>{product.description}</p>
		</div>
	);
};

export default ProductDetails;
