import React from "react";
import {
	List,
	Datagrid,
	TextField,
	Edit,
	SimpleForm,
	EditButton,
	Create,
	SelectInput,
	ReferenceInput,
	DateInput,
} from "react-admin";
export const ListUser = (props) => (
	<List {...props} style={{ overflowX: "auto" }}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="address" />
			<TextField source="created_at" />
			<TextField source="deleted" />
			<TextField source="email" />
			<TextField source="fullname" />
			<TextField source="password" />
			<TextField source="phone_number" />
			<TextField source="updated_at" />
			<TextField source="role.name" />
			<EditButton />
		</Datagrid>
	</List>
);
export const EditUser = (props) => (
	<Edit {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<DateInput source="create_at" />
			<TextField source="deleted" />
			<TextField source="email" />
			<TextField source="fullname" />
			<TextField source="password" />
			<TextField source="phone_number" />
			<DateInput source="update_at" />
			<ReferenceInput label="Role" source="role.id" reference="role">
				<SelectInput optionText="name" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
export const CreateUser = (props) => (
	<Create {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<DateInput source="create_at" />
			<TextField source="deleted" />
			<TextField source="email" />
			<TextField source="fullname" />
			<TextField source="password" />
			<TextField source="phone_number" />
			<DateInput source="update_at" />
			<ReferenceInput label="Role" source="role.id" reference="role">
				<SelectInput optionText="name" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
