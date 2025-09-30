import { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Editcategory extends Component{
    render(){
        return(<>
        <Navbar/>
        <div className="container">
  <div className="card shadow mb-4">
    <div className="card-header py-3 d-flex justify-content-between">
      <h5 className="m-0 text-dark">Edit category</h5>
      <a href="admin_category.html" className="btn btn-primary">
        Back
      </a>
    </div>
    <div className="card-body">
      <form action="" method="post">
        <div className="row">
          <div className="col-lg-9">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                EditTitle
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Change Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="photo"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Edit Description
              </label>
              <textarea
                className="form-control"
                id="description"
                required=""
                defaultValue={"                                    "}
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <input
                type="submit"
                className="btn btn-primary"
                defaultValue="Save changes"
              />
              &nbsp;
              <input
                type="reset"
                className="btn btn-primary"
                Value="clear"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <b>Existing Photo</b>
            <img src="http://picsum.photos/200" className="img-fluid" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer/>

        </>)
    }
}
export default Editcategory;