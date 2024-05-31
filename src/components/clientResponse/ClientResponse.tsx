import { Flex, FloatButton, Typography } from 'antd'
import { useState } from 'react'
import ClientList from './clientList/ClientList'
import { IUser } from '../../view/Doctor'
import ClientResult from './clientInfo/ClientResult'
import { useNavigate } from 'react-router'
import { LeftOutlined } from '@ant-design/icons';

function ClientResponse() {

	const [clientInfo, setClientInfo] = useState<IUser>()
	const { Title } = Typography
	const navigate = useNavigate()

	return (
		<Flex className="h-screen w-full" justify='center' align='center' >



			<Flex
				className="h-5/6 w-5/6"
				gap='middle'
				justify='center'
				align='flex-start'
				vertical
			>
				<Title level={1}>Результаты пациентов</Title>
				<ClientList pickClient={(pickedUser: IUser) => setClientInfo(pickedUser)} />
				{clientInfo && <ClientResult clientInfo={clientInfo} />}
			</Flex>

			<FloatButton
				onClick={() => navigate('/client')}
				icon={<LeftOutlined />}
				shape="square"
			/>

		</Flex>
	)
}

export default ClientResponse