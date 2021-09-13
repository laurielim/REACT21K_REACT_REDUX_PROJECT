import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ rock }) => {
	return (
		<div>
			<img src={rock.image} alt={rock.title} width='250' height='250' />
			<h3>{rock.title}</h3>
			<Link to={`/products/${rock.id}`}>See Rock</Link>
		</div>
	);
};

export default ProductCard;
