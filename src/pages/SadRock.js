import React from "react";
import { useParams } from "react-router";

const SadRock = () => {
	const { id } = useParams();

	const showSadRock = (num) => {
		const totalRock = new Array(parseInt(num))
			.fill(1)
			.map((value, ind) => [value + ind]);
		return totalRock.map((rock) => (
			<img
				src='https://i.ytimg.com/vi/y_T9Jg0U2DA/hqdefault.jpg'
				alt={`Sad Rock ${rock}`}
			/>
		));
	};
	return (
		<div>
			<h2> {id} Single Rock(s)</h2>
			{showSadRock(id)}
		</div>
	);
};

export default SadRock;
