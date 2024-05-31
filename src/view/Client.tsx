import { Button, Flex, FloatButton } from "antd"
import { useNavigate } from "react-router";
import { LeftOutlined } from '@ant-design/icons';

function Client() {

	const navigate = useNavigate()

	return (
		<Flex className="h-screen w-full" justify="center" align="center">
			<Flex gap='middle'>
				<Button onClick={() => navigate('/clientReq')}>Оставить заявку</Button>
				<Button onClick={() => navigate('/clientRes')}>Результат</Button>
			</Flex>

			<FloatButton
				onClick={() => navigate('/')}
				icon={<LeftOutlined />}
				shape="square"
			/>
		</Flex>
	)
}

export default Client