import { Flex, FloatButton } from 'antd'
import UsersList from '../components/usersList/UsersList'
import UserData from '../components/userData/UserData'
import { useNavigate } from 'react-router'
import { LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';

export type IUser = {
	id: 1,
	fio: string,
	type: string,
	client_file: string,
	doctor_file: string,
	doctor_diagnosis: string,
	doctor_description: string
}

function Doctor() {

	const navigate = useNavigate()
	const [clientInfo, setClientInfo] = useState<IUser>()

	return (
		<Flex className="h-screen w-full" justify='center' align='center'>
			<Flex className="h-5/6 w-5/6" vertical gap='middle'>
				<UsersList pickClient={(pickedUser: IUser) => setClientInfo(pickedUser)} />
				{clientInfo && <UserData clientInfo={clientInfo} />}
			</Flex>

			<FloatButton onClick={() => navigate('/')} icon={<LeftOutlined />} shape="square" />

		</Flex>
	)
}

export default Doctor