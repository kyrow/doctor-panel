import { Flex, FloatButton, Typography } from "antd"
import { useNavigate } from "react-router";
import { LeftOutlined } from '@ant-design/icons';
import ClientForm from "../clientForm/ClientForm";

function ClientRequest() {

	const navigate = useNavigate()

	return (
		<Flex className="h-screen w-full" justify="center" align="center" vertical>

			<Typography.Title>Здравствуйте, пациент!</Typography.Title>

			<ClientForm />

			<FloatButton
				onClick={() => navigate('/client')}
				icon={<LeftOutlined />}
				shape="square"
			/>
		</Flex>
	)
}

export default ClientRequest