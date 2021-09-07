import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
	return (
		<Router>
			<Header />
			<main>
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
			</main>
			<Footer />
		</Router>
	);
};

export default App;
