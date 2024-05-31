import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

function DoctorForm({ clientId }: { clientId: number }) {

	const postUser = async (userData: any) => {

		const formData = new FormData();
		formData.append('doctor_diagnosis', userData.diagnose);
		formData.append('doctor_description', userData.description);
		formData.append('file', userData.file);

		const res = await fetch(`http://localhost:3001/doctor/${clientId}`, {
			method: 'POST',
			body: formData,
		});

		const req = await res.json()
		console.log('req', req)
	};

	const onFinish = (values: any) => {
		console.log('@', values)
		postUser(values)
	};

	const normFile = (e: any) => {
		if (Array.isArray(e)) {
			return e[0];
		}
		return e && e.file;
	};


	return (
		<Form
			layout="horizontal"
			onFinish={onFinish}
			style={{ maxWidth: 900 }}
			className="pb-8"
		>

			<Form.Item
				label="Диагноз"
				name="diagnose"
				rules={[{ required: true, message: 'Поставьте диагноз!' }]}
			>
				<Input className="w-3/5" />
			</Form.Item>


			<Form.Item
				label="Описание"
				name="description"
			>
				<Input.TextArea className="w-3/5" />
			</Form.Item>

			<Form.Item
				name="file"
				label="Загрузите изображение"
				valuePropName="file"
				getValueFromEvent={normFile}
				rules={[{ required: true, message: 'Загрузите изображение!' }]}
			>
				<Upload
					maxCount={1}
					listType="picture"
					beforeUpload={() => false}
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

export default DoctorForm