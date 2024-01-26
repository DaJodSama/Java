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
	NumberInput,
	DateInput,
	SelectInput,
	ReferenceInput,
} from "react-admin";
export const ListOrders = (props) => (
	<List {...props} style={{ overflowX: "auto" }}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="address" />
			<TextField source="email" />
			<TextField source="fullname" />
			<TextField source="note" />
			<TextField source="order_date" />
			<TextField source="phone_number" />
			<TextField source="status" />
			<TextField source="total_money" />
			<TextField source="user.fullname" />

			<EditButton />
		</Datagrid>
	</List>
);
export const EditOrders = (props) => (
	<Edit {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<TextInput source="address" />
			<TextInput source="email" />
			<TextInput source="fullname" />
			<TextInput source="note" />
			<DateInput source="order_date" />
			<TextInput source="phone_number" />
			<TextInput source="status" />
			<NumberInput source="total_money" />
			<ReferenceInput label="User" source="user.id" reference="user">
				<SelectInput optionText="fullname" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
export const CreateOrders = (props) => (
	<Create {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<TextInput source="address" />
			<TextInput source="email" />
			<TextInput source="fullname" />
			<TextInput source="note" />
			<DateInput source="order_date" />
			<TextInput source="phone_number" />
			<NumberInput source="status" />
			<NumberInput source="total_money" />
			<ReferenceInput label="User" source="user.id" reference="user">
				<SelectInput optionText="fullname" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
