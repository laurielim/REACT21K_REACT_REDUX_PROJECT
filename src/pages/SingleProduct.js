import React from "react";
import { useParams } from "react-router";

import ProductDetails from "../containers/ProductDetails";

const SingleProduct = () => {
	const { id } = useParams();
	return <ProductDetails id={id} />;
};

export default SingleProduct;
