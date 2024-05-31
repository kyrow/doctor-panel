import { Flex, FloatButton, Typography } from "antd"
import { useNavigate } from "react-router";
import { LeftOutlined } from '@ant-design/icons';
import ClientForm from "../components/clientForm/ClientForm";

function Client() {

	const navigate = useNavigate()

	return (
		<Flex className="h-screen w-full" justify="center" align="center" vertical>

			<Typography.Title>Здравствуйте, пациент!</Typography.Title>

			<ClientForm />

			<FloatButton
				onClick={() => navigate('/')}
				icon={<LeftOutlined />}
				shape="square"
			/>
		</Flex>
	)
}

export default Client