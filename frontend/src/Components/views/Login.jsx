import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import AuthService from "../services/AuthService";

const Login = () => {
	const [userState, setUserState] = useState({ username: "", password: "" });
	let history = useHistory();

	const changeUserData = (e) => {
		setUserState({ ...userState, [e.target.name]: e.target.value });
	};

	const data = AuthService("/user", "/login");

	return (
		<div style={{ maxWidth: "60rem", textAlign: "center", margin: "auto" }}>
			<h1>Login</h1>
			<form>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={changeUserData}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={changeUserData}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default Login;
