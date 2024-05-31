import { Flex, Table, TableProps, Typography } from 'antd';
import { useEffect, useState } from 'react'
import { IUser } from '../../../view/Doctor';

function ClientList({ pickClient }: { pickClient: (newUser: IUser) => void }) {
	const { Title } = Typography;
	const [dataSource, setDataSource] = useState()

	const getClients = async () => {
		const res = await fetch('http://localhost:3001/doctors')
		const req = await res.json()
		setDataSource(req)
	}

	const columns: TableProps<IUser>['columns'] = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'name',
			width: '20%',
		},
		{
			title: 'ФИО пациента',
			dataIndex: 'fio',
			key: 'name',
		}
	]

	useEffect(() => {
		getClients()
	}, [])

	return (
		<Flex className="w-full" >
			<Title level={3} className="w-1/5">Список пациентов</Title>
			<Table
				className="w-4/5"
				dataSource={dataSource}
				columns={columns}
				rowKey={(row) => row.id}
				onRow={(record) => {
					return {
						onClick: () => pickClient(record),
					};
				}}
			/>
		</Flex>
	)
}

export default ClientList