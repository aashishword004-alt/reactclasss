import { Component } from "react";

class Navbar extends Component{
    render(){
        return( <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-cart4" /> Shop
                    </a>
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="admin_dashbord.html">
                                    <i className="bi bi-speedometer" /> dashbord
                                </a>
                            </li>
                            <li className="nav-item"></li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_category.html">
                                    <i className="bi bi-bag" />
                                    <span>Categories</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_products.html">
                                    <i className="bi bi-box-seam-fill" /> <span>Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_users.html">
                                    <i className="bi bi-person" />
                                    <span>Users</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_orders.html">
                                    <i className="bi bi-cart-check-fill" /> <span>Orders</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_change_password.html">
                                    <i className="bi bi-key" /> <span>Change Password</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="admin_logout.html">
                                    <i className="bi bi-box-arrow-in-right" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
    }
}
export default Navbar;