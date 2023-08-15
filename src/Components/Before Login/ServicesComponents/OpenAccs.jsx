import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";


export function OpenAccs() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            "FirstName": "",
            "LastName": "",
            "EmailID": "",
            "Age": 0,
            "City": "",
            "State": "",
            "PANNumber": "",
            "Address": "",
            "AadharNumber": "",
            "Mobile": "",
            "UserID": "",
            "Password": "",
            "REPassword": ""
        },

        onSubmit: (values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5001/registercustomer",
                data: values
            })
            .then(() => {
                alert("Registered Successfully..");
                navigate("/UserLogin");
            })
            .catch((error) => {
                // Handle the error if the registration fails
                console.log(error);
            });
        }
    })


    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <div className="justify-content-around text-center">
                <div className="border justify-content-around m-5 p-3 rounded-3 " style={{ backgroundColor: "#FFF7D4" }}><h3 className="fs-1">Register User</h3></div>
                <div className="border container-xxl" style={{ backgroundColor: "#FBFFDC" }}>

                    <form onSubmit={formik.handleSubmit} className="p-4" >
                        <dl className="row mt-5" >
                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="FirstName" placeholder="Enter First Name" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="LastName" placeholder="Enter Last Name" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="email" name="EmailID" placeholder="Enter Email ID" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="PANNumber" placeholder="Enter PAN Number" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="AadharNumber" placeholder="Enter Aadhar Number" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="Address" placeholder="Enter Address" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="number" name="Age" placeholder="Enter Age" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="City" placeholder="Enter City" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="State" placeholder="Enter State" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="Mobile" placeholder="Enter Mobile" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="text" name="UserID" placeholder="Enter UserID" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="password" name="Password" placeholder="Enter Password" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                            <div className="p-1 fs-5 " style={{ color: "#4C3D3D" }}>
                                <dd><input type="password" name="REPassword" placeholder="Re-Enter Password" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
                            </div>

                        </dl>
                        <button className="btn btn-success fs-4"><span className="bi bi-dash-lg "><span className="bi bi-caret-right"> </span></span><span className="bi bi-r-square"></span>egister</button>
                    </form>
                </div>
                <Link to="/UserLogin" style={{ fontSize: "1.2vw", color: "#116A7B" }} className="">Registered? Login Now</Link>
            </div>
        </div>
    )
}