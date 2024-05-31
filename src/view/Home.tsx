import { Button, Flex } from "antd"
import { useNavigate } from "react-router"

function Home() {

	const navigate = useNavigate()

	const test = async () =>{
		const response = await fetch("http://localhost:3001/clients");
		const movies = await response.json();
		console.log(movies);
	}

	test()

	return (
		<Flex className="h-screen w-full" justify="center" align="center">
			<Flex gap='middle'>
				<Button onClick={() => navigate('/client')}>Пациент</Button>
				<Button onClick={() => navigate('/doctor')}>Врач</Button>
			</Flex>
		</Flex>
	)
}

export default Home