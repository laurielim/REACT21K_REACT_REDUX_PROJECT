import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/products'>Products</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/products/:id'>
						<SingleProduct />
					</Route>
					<Route path='/products'>
						<Products />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
