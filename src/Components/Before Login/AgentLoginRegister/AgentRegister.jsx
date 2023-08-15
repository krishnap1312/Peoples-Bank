import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";


export function AgentRegister() {
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
            "AgentID": "",
            "Password": "",
            "REPassword": ""
        },

        onSubmit: (values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5000/AgentRegister",
                data: values
            })
            alert("Registered Successfully..");
            navigate("/AgentLogin");
        }
    })


    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className=" d-flex justify-content-around text-center">
            <div>
                <img src="Agent.png" style={{width:"50vw", height:"40vw"}} alt="" />
            </div>
                <div className="border container-xxl" style={{ backgroundColor: "#FBFFDC" }}>
                <div className="border justify-content-around m-5 p-3 rounded-3 " style={{ backgroundColor: "#FFF7D4" }}><h3 className="fs-1">Register Agent</h3></div>

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
                                <dd><input type="text" name="AgentID" placeholder="Enter AgentID" className="text-center rounded-3 " onChange={formik.handleChange} style={{ backgroundColor: "#FEF9EA", color: "#0D0630", fontSize: "1.5vw" }} required /></dd>
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
                <Link to="/AgentLogin" style={{ fontSize: "1.2vw", color: "#116A7B",  }} className="p-4 m-3 mb-4">Registered? Login Now</Link>
                </div>
            </div>
        </div>
    )
}