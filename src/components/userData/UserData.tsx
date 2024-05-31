import { Flex, Image, Typography } from 'antd'
import { IUser } from '../../view/Doctor';
import DoctorForm from './docForm/DoctorForm';


function UserData({ clientInfo }: { clientInfo: IUser }) {

	const { Title, Text } = Typography;

	return (
		<Flex className="w-full">
			<Title level={3} className="w-1/5">Данные пользователя</Title>
			<Flex className="w-4/5" vertical gap='middle'>

				<Text className="text-xl">{clientInfo.fio}</Text>

				<Image
					width={400}
					src={`http://localhost:3001/file/${clientInfo.client_file.split('/')[1]}`}
				/>

				<DoctorForm clientId={clientInfo.id} />

			</Flex>
		</Flex>
	)
}

export default UserData