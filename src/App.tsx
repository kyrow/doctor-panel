
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Client from "./view/Client";

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<Client />} />
		</Routes>
	)
}

export default App
