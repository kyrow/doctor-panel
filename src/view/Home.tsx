import { Button, Flex } from "antd"
import { useNavigate } from "react-router"

function Home() {

	const navigate = useNavigate()

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