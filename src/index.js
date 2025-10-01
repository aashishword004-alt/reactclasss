import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashbord from './admin_dashbord';
import Categor from './admin_category';
import Product from './admin_prouduct';
import User from './admin_user';
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

class Admin extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/admin_logout" element={<Logout />} />
          {/* <Route path="/" element={<Dashbord />} />
          <Route path="/category" element={<Categor />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/editcategory" element={<Editcategory />} />
          <Route path="/editproduct" element={<EditeProduct />} />
          <Route path="/viewproduct" element={<Viewproduct />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/print" element={<Print />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Admin />);
