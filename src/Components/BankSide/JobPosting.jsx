import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import "./JobPosting.css"
import NavigationBar from "./NavigationBar";

function JobPosting() {

  const formik = useFormik({
    initialValues: {
      JobTitle: "",
      JobID: "",
      CompanyDescription: "",
      JobDescription: "",
      JobLocations: "",
    },

    onSubmit: (Values => {
      alert(JSON.stringify(Values))
    })
  })



  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="" style={{ margin: "10vh 10vw" }}>
        <div>
          <h2>Start Posting Job</h2>
        </div>
        <div style={{ fontSize: "1.2vw" }} className="m-5">
          <MDBInput label="Job Title" name="JobTitle" style={{ padding: "1vw" }} onChange={formik.handleChange} />
          <br />
          <MDBInput label="Job ID" name="JobID" style={{ padding: "1vw" }} onChange={formik.handleChange} />
          <br />
          <MDBInput label="Company Description" name="CompanyDescription" style={{ padding: "1vw" }} onChange={formik.handleChange} />
          <br />
          <MDBInput label="Job Description" name="JobDescription" style={{ padding: "1vw" }} onChange={formik.handleChange} />
          <br />
          <MDBInput label="Job Locations" name="JobLocations" style={{ padding: "1vw" }} onChange={formik.handleChange} />
          <div className="d-flex justify-content-evenly">
            <button type="button" className="btn btn-primary mt-4 text-center" style={{ padding: ".5vw 3vw" }} data-bs-toggle="modal" data-bs-target="#modal"  >
              Post Job</button>
          </div>
        </div>
        <div className="modal fade" id="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Job Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  Job Title : {formik.values.JobTitle}
                </p>
                <p>
                  Job-ID : {formik.values.JobID}
                </p>
                <p>
                  Company Description : {formik.values.CompanyDescription}
                </p>
                <p>
                  Job Description : {formik.values.JobDescription}
                </p>
                <p>
                  Job Locations : {formik.values.JobLocations}
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
