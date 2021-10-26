import Login from "./Components/views/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/views/Register";
function App() {
	return (
		<div className="App">
			<Login />
			<Register />
		</div>
	);
}

export default App;
