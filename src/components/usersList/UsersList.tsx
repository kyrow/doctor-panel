import { Flex, Table, Typography } from 'antd'


function UsersList() {

	const { Title } = Typography;

	return (
		<Flex className="w-full" >
			<Title level={3} className="w-1/5">Список пациентов</Title>
			<Table className="w-4/5" />

		</Flex>
	)
}

export default UsersList