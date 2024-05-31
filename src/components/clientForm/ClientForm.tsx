import { Button, Form, Input, Upload, UploadFile, UploadProps } from "antd"
import { UploadOutlined } from '@ant-design/icons';

type FieldType = {
	username: string;
	upload: UploadFile[];
};

function ClientForm() {

	const onFinish = (values: FieldType) => {
		console.log('Received values of form: ', values.upload[0].thumbUrl);
	};

	const normFile = (e: UploadProps['fileList']) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};

	return (
		<Form
			layout="horizontal"
			style={{ maxWidth: 900 }}
			onFinish={onFinish}
		>
			<Form.Item
				label="Введите ваше ФИО"
				name="username"
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="upload"
				label="Загрузите изображение"
				valuePropName="fileList"
				getValueFromEvent={normFile}
			>
				<Upload
					maxCount={1}
					name="logo"
					action="/upload.do"
					listType="picture"
				>
					<Button icon={<UploadOutlined />}>Загрузить с устройства</Button>
				</Upload>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Отправить
				</Button>
			</Form.Item>

		</Form>
	)
}

export default ClientForm