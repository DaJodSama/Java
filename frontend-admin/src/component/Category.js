import React from "react";
import {
	Create,
	Datagrid,
	Edit,
	EditButton,
	List,
	SelectInput,
	SimpleForm,
	TextField,
	TextInput,
} from "react-admin";

export const ListCategory = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="isHome" />
				<EditButton />
			</Datagrid>
		</List>
	);
};

export const EditCategory = (props) => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<SelectInput
					source="isHome"
					choices={[
						{ id: 1, name: "Hiển thị ở trang chủ", value: 1 },
						{ id: 0, name: "Ẩn khỏi trang chủ", value: 0 },
					]}
					defaultValue={0}
				/>
			</SimpleForm>
		</Edit>
	);
};

export const CreateCategory = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
			<TextInput source="name" />
				<SelectInput
					source="isHome"
					choices={[
						{ id: 1, name: "Hiển thị ở trang chủ", value: 1 },
						{ id: 0, name: "Ẩn khỏi trang chủ", value: 0 },
					]}
					defaultValue={0}
				/>
			</SimpleForm>
		</Create>
	);
};
