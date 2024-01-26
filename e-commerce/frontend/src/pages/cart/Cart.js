import React, { useEffect, useState } from "react";
import OrderForm from "./OrderForm";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
	const [updatedQuantities, setUpdatedQuantities] = useState({});
	const [showOrderForm, setShowOrderForm] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		calculateTotalPrice();
	}, [cartItems]);

	const handleUpdateQuantity = (productId, quantity) => {
		onUpdateQuantity(productId, quantity);
		setUpdatedQuantities({ ...updatedQuantities, [productId]: false });
	};

	const handleShowOrderForm = () => {
		setShowOrderForm(true);
	};

	const handleCloseOrderForm = () => {
		setShowOrderForm(false);
	};

	const calculateTotalPrice = () => {
		// Tính tổng số tiền từ giỏ hàng
		const total = cartItems.reduce((sum, item) => {
			if (item && item.price) {
				return sum + item.price * item.quantity;
			}
			return sum;
		}, 0);
		setTotalPrice(total);
	};

	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<main className="col-md-9">
						<div className="card">
							<table className="table table-borderless table-shopping-cart">
								<thead className="text-muted">
									<tr className="small text-uppercase">
										<th scope="col">Product</th>
										<th scope="col" width="120">
											Quantity
										</th>
										<th scope="col" width="120">
											Price
										</th>
										<th
											scope="col"
											className="text-right"
											width="200"></th>
									</tr>
								</thead>
								<tbody>
									{cartItems && cartItems.length > 0 ? (
										cartItems.map(
											(item) =>
												item &&
												item.thumbnail && (
													<tr key={item.id}>
														<td>
															<figure className="itemside">
																<div className="aside">
																	<img
																		src={`./images/items/${item.thumbnail}`}
																		className="img-sm"
																		alt={
																			item.title
																		}
																	/>
																</div>
																<figcaption className="info">
																	<a
																		href="#"
																		className="title text-dark">
																		{
																			item.title
																		}
																	</a>
																	<p className="text-muted small">
																		Size:
																		XL,
																		Color:
																		blue,
																		Brand:{" "}
																		{
																			item.brand
																		}
																	</p>
																</figcaption>
															</figure>
														</td>
														<td>
															<div className="form-row mt-0">
																<div className="form-group col-md">
																	<div className="input-group">
																		<input
																			type="number"
																			className="form-control"
																			value={
																				updatedQuantities[
																					item
																						.id
																				] ||
																				item.quantity
																			}
																			onChange={(
																				e
																			) =>
																				setUpdatedQuantities(
																					(
																						prevQuantities
																					) => ({
																						...prevQuantities,
																						[item.id]:
																							e.target.value,
																					})
																				)
																			}
																		/>
																		<div className="input-group-append">
																			<button
																				className="btn btn-info"
																				onClick={() =>
																					handleUpdateQuantity(
																						item.id,
																						updatedQuantities[
																							item
																								.id
																						] ||
																							item.quantity
																					)
																				}>
																				Update
																			</button>
																		</div>
																	</div>
																</div>
															</div>
														</td>
														<td>
															<div className="price-wrap">
																<var className="price">
																	$
																	{item.price *
																		item.quantity}
																</var>
																<small className="text-muted">
																	{" "}
																	$
																	{
																		item.price
																	}{" "}
																	each{" "}
																</small>
															</div>
														</td>
														<td className="text-right">
															<button
																className="btn btn-light btn-round"
																onClick={() =>
																	onRemoveFromCart(
																		item.id
																	)
																}>
																Remove
															</button>
														</td>
													</tr>
												)
										)
									) : (
										<tr>
											<td colSpan="4">
												No items in the cart
											</td>
										</tr>
									)}
								</tbody>
							</table>

							<div className="card-body border-top">
								<button
									onClick={handleShowOrderForm}
									className="btn btn-info float-md-right">
									Mua hàng{" "}
									<i className="fa fa-chevron-right"></i>
								</button>
								<a href="#" className="btn btn-light">
									{" "}
									<i className="fa fa-chevron-left"></i>{" "}
									Continue shopping{" "}
								</a>
							</div>
						</div>
						<div className="alert alert-success mt-3">
							<p className="icontext">
								<i className="icon text-success fa fa-truck"></i>{" "}
								Free Delivery within 1-2 weeks
							</p>
						</div>
					</main>
					<aside className="col-md-3">
						<div className="card mb-3">
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>Have coupon?</label>
										<div className="input-group">
											<input
												type="text"
												className="form-control"
												name=""
												placeholder="Coupon code"
											/>
											<span className="input-group-append">
												<button className="btn btn-info">
													Apply
												</button>
											</span>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<dl className="dlist-align">
									<dt>Total price:</dt>
									<dd className="text-right">
										${totalPrice}
									</dd>
								</dl>

								<dl className="dlist-align">
									<dt>Total:</dt>
									<dd className="text-right h5">
										<dd className="text-right">
											${totalPrice}
										</dd>
									</dd>
								</dl>

								<p className="text-center mb-3">
									<img
									alt=""
										src={require("../../assets/images/misc/payments.png")}
										style={{ height: "26" }}
									/>
								</p>
							</div>
						</div>
					</aside>
				</div>
			</div>

			{showOrderForm && (
				<div
					className="modal"
					style={{
						display: "block",
						overflowY: "auto",
						maxHeight: "100vh",
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}>
					<div className="modal-content">
						<span className="close" onClick={handleCloseOrderForm}>
							&times;
						</span>
						{showOrderForm && <OrderForm totalPrice={totalPrice} />}
					</div>
				</div>
			)}
		</section>
	);
};

export default Cart;
