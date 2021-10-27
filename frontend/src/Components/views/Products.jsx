import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/AuthProvider";
const Products = () => {
	const { globalToken, setAuthenticated, setGlobalToken } = useContext(
		AppContext
	);

	const logOutHandler = () => {
		const logOutUser = async () => {
			const response = await fetch("/user/logout", {
				method: "POST",
				headers: { token: globalToken },
			});
			if (response.status === 200) {
				setGlobalToken("");
				setAuthenticated(false);
			}
		};
		logOutUser();
		console.log("globaltoken in products", globalToken);
	};
	return (
		<div style={{ maxWidth: "60rem", textAlign: "center", margin: "auto" }}>
			<h3>List of products</h3>
			<h4>insert products here</h4>
			<h3>favorites</h3>
			<h4>insert favorites here</h4>
			<form>
				<input placeholder="Product name" />
				<input placeholder="Description" />
				<input placeholder="Price (Only whole numbers)" />
				<button type="submit">Add product</button>
			</form>
			<button onClick={logOutHandler}>Log out</button>
		</div>
	);
};
export default Products;
