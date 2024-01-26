import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import { Link } from "react-router-dom";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";

const cardTextStyle = {
	maxWidth: "80%",
};

const Items = (category) => {
	const { categoryName, categoryId } = category;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		GET_ALL(`product/getlatest?category_id=${categoryId}`).then((item) => {
			setProducts(item.data);
			console.log(item.data); // Add this line to log the products array
		});
	}, [categoryId]);
	return (
		<section className="padding-bottom-sm">
			<header className="section-heading heading-line">
				<h4 className="title-section text-uppercase">{categoryName}</h4>
			</header>

			<div className="row row-sm">
				{products.length > 0 &&
					products.map((row) => (
						<div
							className="col-xl-3 col-lg-3 col-md-4 col-6"
							key={row.id}>
							<div className="card card-product-grid">
								<Link
									to={`/product-detail?productId=${row.id}`}
									className="img-wrap">
									<img
										alt=""
										src={require(`../../assets/images/items/${row.thumbnail}`)}
									/>
								</Link>
								<figcaption className="info-wrap">
									<ul className="rating-stars mb-1">
										<li
											style={{ cardTextStyle }}
											className="stars-active">
											<img src={startsActive} alt="" />
										</li>
										<li>
											<img src={startsDisable} alt="" />
										</li>
									</ul>
									<div>
										<Link
											to={`/product-detail?productId=${row.id}`}
											className="title">
											{row.title}
										</Link>
									</div>
									<div className="price h5 mt-2">
										Giá:{row.price}$
									</div>
									<div className="price h5 mt-2">
										Sale:{row.discount}$
									</div>
								</figcaption>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};
export default Items;
