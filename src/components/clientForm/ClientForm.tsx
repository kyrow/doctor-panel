import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import {  useNavigate } from "react-router";

function ClientForm() {
	const navigate = useNavigate()
	const postUser = async (userData: any) => {

		const formData = new FormData();
		formData.append('fio', userData.fio);
		formData.append('file', userData.file);

		const res = await fetch(`http://localhost:3001/client`, {
			method: 'POST',
			body: formData,
		});

		await res.json()
	};

	const onFinish = (values: any) => {
		postUser(values).then((_)=>{
			navigate("/")
		})
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
			style={{ maxWidth: 900 }}
			onFinish={onFinish}
		>

			<Form.Item
				label="Введите ваше ФИО"
				name="fio"
				rules={[{ required: true, message: 'Пожалуйста представьтесь' }]}
			>
				<Input />
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
	);
}

export default ClientForm;
