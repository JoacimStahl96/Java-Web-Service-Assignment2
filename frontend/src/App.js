import React, { useEffect, useState } from "react";
import Login from "./Components/views/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/views/Register";
import Products from "./Components/views/Products";
import { UnPrivate } from "./Components/hooks/UnPrivate";
import { PrivateRoute } from "./Components/hooks/PrivateRoute";

function App() {
	return (
		<Router className="App">
			<UnPrivate exact path="/" component={Login} />
			<UnPrivate exact path="/" component={Register} />
			<PrivateRoute exact path="/products" component={Products} />
		</Router>
	);
}

export default App;
