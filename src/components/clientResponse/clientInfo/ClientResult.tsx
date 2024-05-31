import { IUser } from '../../../view/Doctor'
import { Flex, Image, Typography } from 'antd'


function ClientResult({ clientInfo }: { clientInfo: IUser }) {

	const { Text, Title } = Typography


	return (
		<Flex vertical className="w-full">

			<Title level={2}>Результат пациента: {clientInfo.fio}</Title>

			<Flex gap='middle' className="w-full">
				<Flex vertical className="w-2/5">
					<Text>Диагноз: {clientInfo.doctor_diagnosis}</Text>
					{clientInfo.doctor_description ?
						<Text>Описание: {clientInfo.doctor_description}</Text> :
						null
					}
				</Flex>

				<Image
					width={400}
					src={`http://localhost:3001/file/${clientInfo.doctor_file.split('/')[1]}`}
				/>
			</Flex>



		</Flex>

	)
}

export default ClientResult