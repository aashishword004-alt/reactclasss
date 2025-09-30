import { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class User extends Component{
    render(){
        return(<>
        <Navbar/>
        <div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h5 className="m-0 font-weight-bold text-primary">
            Users - Customers
          </h5>
        </div>
        <div className="card-body">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Created at</th>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ankit@gmail.com</td>
                <td>1234567890</td>
                <td>Fri 09-08-2024</td>
                <td>
                  <a className="btn btn-primary" href="#">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
        </>)
    }
}
export default User;