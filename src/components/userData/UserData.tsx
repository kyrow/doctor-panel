import { Button, Flex, Form, Input, Typography, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

function UserData() {

	const { Title, Text } = Typography;

	return (
		<Flex className="w-full">
			<Title level={3} className="w-1/5">Данные пользователя</Title>
			<Flex className="w-4/5" vertical>
				<Form
					layout="horizontal"
					style={{ maxWidth: 900 }}
				>

					<Text>username</Text>


					<Form.Item label="Диагноз">
						<Input className="w-3/5" />
					</Form.Item>


					<Form.Item label="Описание">
						<Input.TextArea className="w-3/5" />
					</Form.Item>

					<Form.Item
						label="Загрузите изображение"
						valuePropName="fileList"
					>
						<Upload action="/upload.do" listType="picture-card">
							<button style={{ border: 0, background: 'none' }} type="button">
								<PlusOutlined />
								<div style={{ marginTop: 8 }}>Upload</div>
							</button>
						</Upload>
					</Form.Item>

					<Button>Отправить</Button>

				</Form>

			</Flex>
		</Flex>
	)
}

export default UserData