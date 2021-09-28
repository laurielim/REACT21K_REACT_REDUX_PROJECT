import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.png";

import BasketCounter from "../containers/BasketCounter";

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<NavLink to='/'>
					<img src={logo} alt='Issa rock' />
				</NavLink>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink className='nav-link' exact to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' exact to='/about'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' exact to='/products'>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' exact to='/rocks-basket'>
							<FontAwesomeIcon icon={faShoppingBasket} />({<BasketCounter />})
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
