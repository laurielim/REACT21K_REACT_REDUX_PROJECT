import axios from "axios";

const baseUrl = "http://localhost:3001/rocks/";

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
