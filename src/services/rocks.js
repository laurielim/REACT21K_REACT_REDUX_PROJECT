import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products/";

const getAll = async () => {
	const res = await axios.get(baseUrl);
	return res.data;
};

const getSingleRock = async (id) => {
	const res = await axios.get(baseUrl + id);
	return res.data;
};

const rocksServices = { getAll, getSingleRock };

export default rocksServices;
