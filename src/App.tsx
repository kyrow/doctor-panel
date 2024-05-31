
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Client from "./view/Client";
import Doctor from "./view/Doctor";

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<Client />} />
			<Route path="/doctor" element={<Doctor />} />
		</Routes>
	)
}

export default App
