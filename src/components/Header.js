import React from "react";
import { NavLink } from "react-router-dom";

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
						<NavLink exact to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/about'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/products'>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/rocks-basket'>
							Basket ({<BasketCounter />})
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
