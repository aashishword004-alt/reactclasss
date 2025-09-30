import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashbord from './admin_dashbord';
import Categor from './admin_category';
import Product from './admin_prouduct';
import User from './admin_user'
import Order from './admin_oder';
import ChangePassword from './admin_change_password';
import Logout from './admin_logout';
import Addcategory from './admin_add_category';
import Addproduct from './admin_add_product';
import Editcategory from './admin_edit_category';
import EditeProduct from './admin_edit_product';
import Viewproduct from './admin_product_detail';
import ViewOrder from './admin_view_orderdetail';
import Print from './admin_print';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Print/>);

