
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Client from "./view/Client";
import Doctor from "./view/Doctor";
import ClientRequest from "./components/clientRequest/ClientRequest";
import ClientResponse from "./components/clientResponse/ClientResponse";

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<Client />} />
			<Route path="/clientReq" element={<ClientRequest />} />
			<Route path="/clientRes" element={<ClientResponse />} />
			<Route path="/doctor" element={<Doctor />} />
		</Routes>
	)
}

export default App
