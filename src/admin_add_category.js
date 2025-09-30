import { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
class Addcategory extends Component{
    render(){
        return(<>
        <Navbar/>
        <div className="container">
  <div className="card shadow mb-4">
    <div className="card-header py-3 d-flex justify-content-between">
      <h5 className="m-0 text-dark">New category</h5>
      <a href="admin_category.html" className="btn btn-primary">
        Back
      </a>
    </div>
    <div className="card-body">
      <form action="" method="post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" required="" />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Select Photo
          </label>
          <input type="file" className="form-control" id="photo" required="" />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            required=""
            defaultValue={"                                    "}
          />
        </div>
        <div className="d-flex justify-content-end">
          <input
            type="submit"
            className="btn btn-primary"
            defaultValue="Save"
          />
          &nbsp;
          <input type="reset" className="btn btn-primary"  />
        </div>
      </form>
    </div>
  </div>
</div>
<Footer/>


        </>)
    }
}

export default Addcategory;