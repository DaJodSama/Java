import React, { useState } from "react";
import { POST_ADD } from "../../api/apiService";

const Payment = ({ totalPrice }) => {
	const [orderData, setOrderData] = useState({
		address: "",
		email: "",
		fullname: "",
		note: "",
		order_date: new Date().toISOString(),
		phone_number: "",
		status: 0,
		total_money: totalPrice,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrderData({
			...orderData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		POST_ADD("orders", orderData)
			.then((response) => {
				console.log(response.data);
				alert("Order placed successfully!");
				// Thực hiện các hành động khác nếu cần
			})
			.catch((error) => {
				console.error(error);
				alert("Failed to place order. Please try again.");
			});
	};

	return (
		<section className="section-content padding-y">
			<div className="container" style={{ maxWidth: "720px" }}>
				<div className="card mb-4">
					<div className="card-body">
						<h4 className="card-title mb-3">Delivery info</h4>
						<form onSubmit={handleSubmit}>
							<div className="form-row">
								<div className="col form-group">
									<label>Full name</label>
									<input
										type="text"
										className="form-control"
										placeholder="full name"
										value={orderData.fullname}
										onChange={handleInputChange}
									/>
								</div>
								<div className="col form-group">
									<label>Email</label>
									<input
										type="text"
										className="form-control"
										placeholder="email"
										value={orderData.email}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>

							<div className="form-row">
								<div className="col form-group">
									<label>Address</label>
									<input
										type="email"
										className="form-control"
										placeholder="address"
										value={orderData.address}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col form-group">
									<label>Phone</label>
									<input
										type="text"
										className="form-control"
										placeholder="phone number"
										value={orderData.phone_number}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>

							<div className="form-row">
								<div className="form-group col-md-6">
									<label>Note</label>
									<textarea
										type="text"
										className="form-control"
										value={orderData.note}
										onChange={handleInputChange}
									/>
								</div>
								<div className="form-group col-md-6">
									<label>Order Date</label>
									<input
										type="text"
										className="form-control"
										value={orderData.order_date}
										onChange={handleInputChange}
										readOnly
									/>
								</div>
							</div>
							<div className="form-group">
								<label>Total</label>
								<input
									className="form-control"
									type="number"
									name="total_money"
									totalPrice={totalPrice}
									readOnly
								/>
							</div>
							<div className="form-group">
								<label>Status</label>
								<select
									className="form-control"
									name="status"
									value={orderData.status}
									onChange={handleInputChange}
									required>
									<option value={0}>Đang chờ</option>
									<option value={1}>Đang xử lý</option>
									<option value={2}>Đã giao</option>
								</select>
							</div>
							<button className="button" type="submit">
								Xác Nhận
							</button>
						</form>
					</div>
				</div>

				<br />
				<br />
			</div>
		</section>
	);
};

export default Payment;
