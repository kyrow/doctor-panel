import { Button, Flex } from "antd"

function Home() {

	// const router = useRouter

	const test = async () =>{
		const response = await fetch("http://localhost:3001/clients");
		const movies = await response.json();
		console.log(movies);
	}

	test()

	return (
		<Flex className="h-screen w-full" justify="center" align="center">
			<Flex gap='middle'>
				<Button onClick={() => console.log('test')}>Пациент</Button>
				<Button>Врач</Button>
			</Flex>
		</Flex>
	)
}

export default Home