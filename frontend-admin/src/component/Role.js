import React from "react";
import {
	List,
	Datagrid,
	TextField,
	Edit,
	SimpleForm,
	EditButton,
	TextInput,
	Create,
} from "react-admin";

export const ListRole = (props) => (
	<List {...props} style={{ overflowX: "auto" }}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="name" />
			<EditButton />
		</Datagrid>
	</List>
);

export const EditRole = (props) => (
	<Edit {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const CreateRole = (props) => (
	<Create {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
