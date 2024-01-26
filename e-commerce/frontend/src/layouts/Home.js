import React, { useEffect, useState } from "react";
import Slider from "../pages/home/Slider";
import Deal from "../pages/home/Deal";
import Apparel from "../pages/home/Apparel";
import Electronics from "../pages/home/Electronics";
import Items from "../pages/home/Items";
import Services from "../pages/home/Services";
import Region from "../pages/home/Region";
import Subscribe from "../pages/home/Subscribe";
import Request from "../pages/home/Request";
import { GET_ALL } from "./../api/apiService";

function Home() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		GET_ALL(`category`).then((item) => setCategories(item.data));
	}, [categories]);

	const filteredCategories = categories.filter(
		(category) => category.isHome === 1
	);

	return (
		<div class="container">
			<Slider />
			{/* <Deal /> */}
			{/* <Apparel /> */}
			{/* <Electronics /> */}

			{filteredCategories.length > 0 &&
				filteredCategories.map((row) => (
					<Items categoryName={row.name} categoryId={row.id} />
				))}
			<Request />
			{/* <Services />
			<Region /> */}
			<Subscribe />
		</div>
	);
}
export default Home;
