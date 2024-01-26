import { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { GET_ALL } from "./../api/apiService";
import SearchCategoryResults from "./SearchCategoryResults";
function Header() {
	const [categories, setCategories] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	// const {cartState}=useCart();

	const navigate = useNavigate();

	useEffect(() => {
		GET_ALL(`category`).then((item) => setCategories(item.data));
	}, []);

	const handleSearch = () => {
		const results = categories.filter((category) =>
			category.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setSearchResults(results);
	};
	return (
		<header className="section-header">
			<section className="header-main border-bottom">
				<div className="container">
					<div className="row align-items-center">
						<div
							style={{ textAlign: "center" }}
							className="col-xl-2 col-lg-3 col-md-12">
							<Link to="/" className="brand-wrap">
								<span
									style={{
										fontSize: "28px",
										fontWeight: "bold",
										textAlign: "center",
									}}>
									DAJOD.
								</span>
							</Link>
						</div>
						<div className="col-xl-6 col-lg-5 col-md-6">
							<form action="#" className="search-header" onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}>
								<div className="input-group w-100">
									<select
										className="custom-select border-right"
										name="category_name">
										<option value="">All type</option>
										{categories.map((category) => (
                                            <option key={category.id} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
									</select>
									<input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />

									<div className="input-group-append">
										<button
											className="btn btn-primary"
											type="submit">
											<i className="fa fa-search"></i>{" "}
											Search
										</button>
									</div>
								</div>
							</form>

							{searchResults.length > 0 && <SearchCategoryResults results={searchResults} />}

						</div>{" "}
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="widgets-wrap float-md-right">
								<div className="widget-header mr-3">
									<Link to="/" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-user"></i>
											<span className="notify">3</span>
										</div>
										<small className="text">
											{" "}
											My profile{" "}
										</small>
									</Link>
								</div>
								<div className="widget-header mr-3">
									<Link to="/" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-comment-dots"></i>
											<span className="notify">1</span>
										</div>
										<small className="text">
											{" "}
											Message{" "}
										</small>
									</Link>
								</div>
								<div className="widget-header mr-3">
									<Link to="/order" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-store"></i>
										</div>
										<small className="text"> Orders </small>
									</Link>
								</div>
								<div className="widget-header">
									<Link
										to="/shopping-cart"
										className="widget-view">
										<div className="icon-area">
											<i className="fa fa-shopping-cart"></i>
										</div>
										<small className="text"> Cart </small>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>{" "}
			<nav className="navbar navbar-main navbar-expand-lg border-bottom">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#main_nav"
						aria-controls="main_nav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									data-toggle="dropdown"
									to="/">
									{" "}
									<i class="fa fa-bars text-muted mr-2"></i>{" "}
									Demo pages{" "}
								</Link>
								<div class="dropdown-menu dropdown-large">
									<nav class="row">
										<div class="col-6">
											<Link to="page-index-1.html">
												Home page 1
											</Link>
											<Link to="page-index-2.html">
												Home page 2
											</Link>
											<Link to="page-category.html">
												All category
											</Link>
											<Link to="page-listing-large.html">
												Listing list
											</Link>
											<Link to="page-listing-grid.html">
												Listing grid
											</Link>
											<Link to="page-shopping-cart.html">
												Shopping cart
											</Link>
											<Link to="page-detail-product.html">
												Product detail
											</Link>
											<Link to="page-content.html">
												Page content
											</Link>
											<Link to="page-user-login.html">
												Page login
											</Link>
											<Link to="page-user-register.html">
												Page register
											</Link>
										</div>
										<div className="col-6">
											<Link to="page-profile-main.html">
												Profile main
											</Link>
											<Link to="page-profile-orders.html">
												Profile orders
											</Link>
											<Link to="page-profile-seller.html">
												Profile seller
											</Link>
											<Link to="page-profile-wishlist.html">
												Profile wishlist
											</Link>
											<Link to="page-profile-setting.html">
												Profile setting
											</Link>
											<Link to="page-profile-address.html">
												Profile address
											</Link>
											<Link to="rtl-page-index-1.html">
												RTL home page
											</Link>
											<Link
												to="page-components.html"
												target="_blank">
												More components
											</Link>
										</div>
									</nav>
								</div>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/categories">
									All categories
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									All products
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-md-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Get the app
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="http://example.com"
									data-toggle="dropdown">
									English
								</Link>
								<div className="dropdown-menu dropdown-menu-right">
									<Link className="dropdown-item" to="/">
										Russian
									</Link>
									<Link className="dropdown-item" to="/">
										French
									</Link>
									<Link className="dropdown-item" to="/">
										Spanish
									</Link>
									<Link className="dropdown-item" to="/">
										Chinese
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
export default Header;
