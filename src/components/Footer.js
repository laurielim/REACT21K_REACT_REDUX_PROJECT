import React from "react";

const Footer = () => {
	const today = new Date();

	return (
		<footer>
			<p>
				Made by <a href='https://github.com/laurielim'>Laurie</a>. Copyright{" "}
				{today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
