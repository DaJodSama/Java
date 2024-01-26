import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Order from './../pages/order/Order';
import Payment from "../pages/payment/Payment";
import AllCategories from "../pages/allcategories/AllCategories";
import AllProducts from "../pages/allproduct/AllProducts";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import ListCategory from "../pages/listcategory/ListCategory";

const Main = () => (
	<main>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/order" element={<Order />} />
			<Route path="/product-detail" element={<ProductDetail />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/categories" element={<AllCategories />} />
			<Route path="/products" element={<AllProducts />} />
			<Route path="/product/list/:id" element={<ListCategory />} />
			<Route path="/shopping-cart" element={<Cart />} />
		</Routes>
	</main>
);
export default Main;
