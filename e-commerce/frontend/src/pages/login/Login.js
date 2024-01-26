import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="section-conten padding-y" style="min-height:84vh">
			<div
				className="card mx-auto"
				style={{maxWidth: "380px", marginTop:"100px"}}>
				<div className="card-body">
					<h4 className="card-title mb-4">Sign in</h4>
					<form>
						<Link to="/" className="btn btn-facebook btn-block mb-2">
							{" "}
							<i className="fab fa-facebook-f"></i> &nbsp Sign in with
							Facebook
						</Link>
						<Link to="/" className="btn btn-google btn-block mb-4">
							{" "}
							<i className="fab fa-google"></i> &nbsp Sign in with
							Google
						</Link>
						<div className="form-group">
							<input
								name=""
								className="form-control"
								placeholder="Username"
								type="text"
							/>
						</div>
						<div className="form-group">
							<input
								name=""
								className="form-control"
								placeholder="Password"
								type="password"
							/>
						</div>

						<div className="form-group">
							<Link to="/" className="float-right">
								Forgot password?
							</Link>
							<label className="float-left custom-control custom-checkbox">
								{" "}
								<input
									type="checkbox"
									className="custom-control-input"
									checked=""
								/>{" "}
								<div className="custom-control-label">
									{" "}
									Remember{" "}
								</div>{" "}
							</label>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block">
								{" "}
								Login{" "}
							</button>
						</div>
					</form>
				</div>
			</div>

			<p className="text-center mt-4">
				Don't have account? <Link to="/">Sign up</Link>
			</p>
			<br></br>
		</section>
	);
};

export default Login;
