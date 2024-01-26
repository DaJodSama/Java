import React from "react";
import {
	List,
	Datagrid,
	TextField,
	Edit,
	SimpleForm,
	EditButton,
	Create,
	NumberInput,
	ReferenceInput,
	SelectInput,
} from "react-admin";
export const ListOrderDetail = (props) => (
	<List {...props} style={{ overflowX: "auto" }}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="num" />
			<TextField source="price" />
			<TextField source="total_money" />
			<TextField source="product.title" />
			<TextField source="order.fullname" />
			<EditButton />
		</Datagrid>
	</List>
);
export const EditOrderDetail = (props) => (
	<Edit {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<NumberInput source="num" />
			<NumberInput source="price" />
			<NumberInput source="total_money" />
			<ReferenceInput
				label="Orders"
				source="orders.id"
				reference="orders">
				<SelectInput optionText="fullname" />
			</ReferenceInput>
			<ReferenceInput
				label="Products"
				source="product.id"
				reference="product">
				<SelectInput optionText="title" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
export const CreateOrderDetail = (props) => (
	<Create {...props} style={{ overflowX: "auto" }}>
		<SimpleForm>
			<NumberInput source="num" />
			<NumberInput source="price" />
			<NumberInput source="total_money" />
			<ReferenceInput label="Orders" source="orders.id" reference="orders">
				<SelectInput optionText="fullname" />
			</ReferenceInput>
			<ReferenceInput
				label="Product"
				source="product.id"
				reference="product">
				<SelectInput optionText="title" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
