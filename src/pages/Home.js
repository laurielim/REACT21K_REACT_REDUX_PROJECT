import React from "react";
import HomeBanner from "../components/HomeBanner";
import ProductCategoriesContainer from "../containers/ProductCategoriesContainer";
import ProductsPreviewContainer from "../containers/ProductsPreviewContainer";

const Home = () => {
	return (
		<>
			<h2>Home</h2>
			<HomeBanner />
			<ProductCategoriesContainer />
			<ProductsPreviewContainer />
		</>
	);
};

export default Home;
