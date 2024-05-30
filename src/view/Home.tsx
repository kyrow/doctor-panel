import { Button, Flex } from "antd"

function Home() {

	// const router = useRouter

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