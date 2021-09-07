import React from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
	const { id } = useParams();
	return <div>Single Product {id}</div>;
};

export default SingleProduct;
