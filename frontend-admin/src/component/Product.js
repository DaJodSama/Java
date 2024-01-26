import React from "react";
import { Create, Datagrid, DateInput, Edit, EditButton, List, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from "react-admin";

export const ListProduct = (props) => {
	return (
		<List {...props}>
			<Datagrid style={{ overflowX: "auto" }}>
				<TextField source="id" />
				<TextField source="created_at" />
				<TextField source="deleted" />
				<TextField source="title" />
				<TextField source="price" />
				<TextField source="discount" />
				<TextField source="thumbnail" />
				<TextField source="description" />
				<TextField source="updated_at" />
				<TextField source="category.name" />
				<EditButton />
			</Datagrid>
		</List>
	);
};

export const EditProduct = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <DateInput source="create_at" />
            <NumberInput source="deleted" />
            <NumberInput source="discount" />
            <NumberInput source="price" />
            <TextInput source="thumbnail" />
            <TextInput source="description" />
            <TextInput source="title" />
            <DateInput source="update_at" />
            <ReferenceInput label="Category"
                source="category.id"
                reference="category">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const CreateProduct = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput source="discount" />
            <TextInput source="thumbnail" />
            <TextInput source="description" multiline fullWidth />
            <DateInput source="create_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="category"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
