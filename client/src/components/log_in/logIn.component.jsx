import React from "react";
import styles from "./logIn.module.css";
import axios from "axios";
import ErrorAlert from "./../../ErrorAlert";
import { UserAuth } from "./../../userContext";
import signInImage from "../../assests/sign_in.jpg"

class LogIn extends React.Component {
	static contextType = UserAuth;
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isWorker: false,
			error: null,
		};
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value,
		});
	};

	handleSubmitt = async (event) => {
		console.log("hii");
		event.preventDefault();
		
		if (this.state.email && this.state.password) {
			try {
				const endpoint = "/login/customer";
				const response = await axios.post(endpoint, {
					email: this.state.email,
					password: this.state.password,
				});
				
				console.log(response.data);
				const { usr, token } = response.data;
				const userType = this.state.isWorker ? "worker" : "customer";
				
				await this.context.login(usr._id, usr.name, token, userType);
				
				alert("Successfully signed in");
				console.log(this.context);
				this.props.history.push("/best_services");
			} catch (err) {
				if (err.response) {
					this.setState({ error: err.response.data });
				} else if (err.request) {
					this.setState({ error: "No response received from server." });
				} else {
					this.setState({ error: err.message });
				}
			}
		}
	};

	handleSubmit = async(e)=>{
		e.preventDefault();

		console.log("working",this.state.email,this.state.password);
		const data  = {email:this.state.email, password:this.state.password}
		const response = await axios.post("/login/customer",data);
		const { usr, token } = response.data;
		const userType = this.state.isWorker ? "worker" : "customer";
		
		await this.context.login(usr._id, usr.name, token, userType);
		
		alert("Successfully signed in");
		console.log(this.context);
		this.props.history.push("/best_services");
	}
	

	render() {
		return (
			<div>
				{this.context.isWorker === false && this.context.isCustomer === false ? (
					<div className={styles.parent_div}>
						<div className={styles.image_div}>
							<img
								src={signInImage}
								alt="Sign In with Google or Facebook"
								className={styles.signin_image}
								style={{ width: "100%" }} // You can style the image
							/>
						</div>

						<div className={styles.form_div}>
							<div className={styles.form_div_inner}>
								{this.state.error && <ErrorAlert ErrorMessage={this.state.error} />}
								<h2 className={styles.form_h2}>SIGN IN</h2>

								<form onSubmit={this.handleSubmit} className={styles.form_component}>
									<input
										type="text"
										name="email"
										placeholder="Email"
										onChange={this.handleChange}
										value={this.state.email}
										required
									/>

									<input
										type="password"
										name="password"
										placeholder="Password"
										onChange={this.handleChange}
										value={this.state.password}
										required
									/>

									<div className="d-flex justify-content-center align-items-center">
										<input
											style={{ height: `20px`, width: `20px` }}
											type="checkbox"
											name="usertype"
											id="userType"
											onChange={() => {
												this.setState({ isWorker: !this.state.isWorker });
											}}
										/>
										<label
											htmlFor="userType"
											style={{ color: `white`, padding: `10px` }}
										>
											Company Worker
										</label>
									</div>
									<button className={styles.signin_btn}>Sign In</button>
								</form>

								<h4 className={styles.form_h4}>
									New User?{" "}
									<a href="#test" className={styles.form_link}>
										Sign Up Here
									</a>
								</h4>
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex justify-content-center align-items-center" style={{ height: `80vh` }}>
						<h1>User Already Logged in</h1>
					</div>
				)}
			</div>
		);
	}
}

export default LogIn;
