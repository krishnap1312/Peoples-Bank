import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

function AgentLogin() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [errorMessage , SetErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      AgentID: "",
      Password: "",
    },
    onSubmit: (customer) => {
      axios({
        method: "get",
        url: `http://127.0.0.1:5000/AgentData`,
      }).then((response) => {
        console.log(response.data);
        for (var user of response.data) {
          if (
            user.AgentID == customer.AgentID &&
            user.Password == customer.Password
          ) {
            
            setCookie("userid",customer.AgentID);
            navigate("/AgentLoginAddDetails");
            break;
          } else {
            SetErrorMessage("Invalid Credentials.. Try Again!!!")
            navigate("/AgentLogin");
          }
        }
      });
    },
  });
  return (
    <div>
<div>
        <NavigationBar></NavigationBar>
      </div>
    <div className="contianer-xxl">
      <div className="text-center justify-content-evenly container-fluid">
        <h3 className="card-header" style={{textDecoration:"underline", color:"#116A7B", fontSize:"2.5vw"}}>Agent Login</h3>
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <dl>
            <dd>
              <input type="text" name="AgentID" placeholder="AgentID" className="text-center rounded-3 border-1 border-opacity-50" style={{fontSize:"1.5vw", borderColor:"#3A98B9"}} onChange={formik.handleChange} />
            </dd>
            <dd>
              <input
                type="password"
                name="Password"
                onChange={formik.handleChange}
                style={{fontSize:"1.5vw", borderColor:"#3A98B9"}}
                className="text-center rounded-3 border-1 border-opacity-50"
                placeholder="Password"
              />
            </dd>
          </dl>
          <div className="d-block text-center justify-content-center ">
        <div>
          <dt className="text-danger">{errorMessage}</dt>
        </div>
          <button className="btn btn-info mb-5 mt-3" style={{fontSize:"1.2vw"}}>Login</button>
          
          </div>
        </form>
        <p>
            <Link to="/AgentRegister" style={{fontSize:"1.2vw",color:"#116A7B"}} className="">New Agent? Register Now</Link>
          </p>
      </div>
    </div>
    </div>
  );
}

export default AgentLogin;
