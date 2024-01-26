import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import AdminPanel from "./component/AdminPanel";
import simpleRestProvider from "ra-data-simple-rest";
import {
	CreateCategory,
	EditCategory,
	ListCategory,
} from "./component/Category";

import { CreateProduct, EditProduct, ListProduct } from "./component/Product";
import { CreateRole, EditRole, ListRole } from "./component/Role";
import { CreateGallery, EditGallery, ListGallery } from "./component/Gallery";
import { CreateUser, EditUser, ListUser } from "./component/User";
import { CreateOrders, EditOrders, ListOrders } from "./component/Orders";
import {
	CreateOrderDetail,
	EditOrderDetail,
	ListOrderDetail,
} from "./component/OrderDetail";

const httpClient = fetchUtils.fetchJson;

const App = () => {
	return (
		<Admin
			dashboard={AdminPanel}
			dataProvider={simpleRestProvider(
				"http://localhost:8080/api",
				httpClient
			)}>
			{/* USER */}
			<Resource
				name="user"
				list={ListUser}
				edit={EditUser}
				create={CreateUser}
			/>
			{/* CATEGORY */}
			<Resource
				name="category"
				list={ListCategory}
				edit={EditCategory}
				create={CreateCategory}
			/>
			{/* PRODUCT */}
			<Resource
				name="product"
				list={ListProduct}
				edit={EditProduct}
				create={CreateProduct}
			/>
			{/* ROLE */}
			<Resource
				name="role"
				list={ListRole}
				edit={EditRole}
				create={CreateRole}
			/>
			{/* GALLERY */}
			<Resource
				name="gallery"
				list={ListGallery}
				edit={EditGallery}
				create={CreateGallery}
			/>
			{/* ORDERS */}
			<Resource
				name="orders"
				list={ListOrders}
				edit={EditOrders}
				create={CreateOrders}
			/>
			{/* ORDER DETAIL */}
			<Resource
				name="orderdetail"
				list={ListOrderDetail}
				edit={EditOrderDetail}
				create={CreateOrderDetail}
			/>
		</Admin>
	);
};
export default App;
