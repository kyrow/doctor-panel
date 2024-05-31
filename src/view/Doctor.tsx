import { Flex, FloatButton } from 'antd'
import UsersList from '../components/usersList/UsersList'
import UserData from '../components/userData/UserData'
import { useNavigate } from 'react-router'
import { LeftOutlined } from '@ant-design/icons';

function Doctor() {

	const navigate = useNavigate()

	return (
		<Flex className="h-screen w-full" justify='center' align='center'>
			<Flex className="h-5/6 w-5/6" vertical gap='middle'>
				<UsersList />
				<UserData />
			</Flex>

			<FloatButton onClick={() => navigate('/')} icon={<LeftOutlined />} shape="square" />

		</Flex>
	)
}

export default Doctor