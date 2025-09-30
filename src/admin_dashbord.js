import { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
class Dashbord extends Component {
    render() {
        return (<>
         <Navbar/>
            {/* Main Content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex justify-content-between">
                                <h5 className="m-0 font-weight-bold text-primary">Dashboard</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {/* Earnings (Monthly) Card Example */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Orders (today)
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            10
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Orders (Monthly)
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            20
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Orders (Quaterly)
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            90
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Orders (Yearly)
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            360
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-xl-4 col-md-6 mb-4">
                                        <div className="card border-left-danger shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Products
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            10
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa fa-gift fa-2x text-info" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 mb-4">
                                        <div className="card border-left-danger shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Categories
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            3
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa fa-tags fa-2x text-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 mb-4">
                                        <div className="card border-left-danger shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Users
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            200
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa fa-users fa-2x text-success" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
          <Footer/>
        </>

        )
    }
}
export default Dashbord;