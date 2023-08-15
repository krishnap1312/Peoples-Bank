import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function UserLogins() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  
  const formik = useFormik({
    initialValues: {
      UserID: "",
      Password: "",
    },
    onSubmit: (customer) => {
      console.log(customer)
      axios({
        method: "get",
        // url: `http://127.0.0.1:5000/customers/${customer.UserID}`,
        url: `http://127.0.0.1:5001/AllCustomers`,
      }).then((response) => {
        console.log(response.data);
        for (var user of response.data) {
          if (
            user.UserID == customer.UserID &&
            user.Password == customer.Password
          ) {
            
            setCookie("userid",customer.UserID);
            navigate(`/LoginHome/${user.UserID}`);
            break;
          } else {
            
            navigate("/UserLogin");
          }
        }
      });
    },
  });
  return (
    <div>
<div>
        <div className='d-flex justify-content-between'>


          <nav className='justify-content-evenly navbar navbar-light navColor ' style={{ fontSize: "1.792vw", width:"100vw" }}>
            <div>
              <img src="LogoTrans.png" className='m-3 imgColor' style={{ width: "25vw" }} alt="" />

            </div>
            <div className='d-flex m-5 '>
              <div className='m-4 mt-5  fw-bold '><Link to="/Home" className='text-decoration-none text-white'>Home</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/Careers" className='text-decoration-none text-white'>Careers</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/Calculator" className='text-decoration-none text-white'>Calculator</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/ContactUs" className='text-decoration-none text-white'>Contact Us</Link>  </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/AboutUs" className='text-decoration-none text-white'>About Us</Link>  </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/UserLogin" className='text-decoration-none text-white'>User Login</Link> </div>
              <div></div>
            </div>
          </nav>
        </div>
      </div>
    <div className="contianer-xxl">
      <div className="text-center justify-content-evenly container-fluid">
        <h3 className="card-header" style={{textDecoration:"underline", color:"#116A7B", fontSize:"2.5vw"}}>User Login</h3>
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <dl>
            <dd>
              <input type="text" name="UserID" placeholder="UserID" className="text-center rounded-3 border-1 border-opacity-50" style={{fontSize:"1.5vw", borderColor:"#3A98B9"}} onChange={formik.handleChange} />
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
        
          <button className="btn btn-info mb-5 mt-3" style={{fontSize:"1.2vw"}}>Login</button>
          
          </div>
        </form>
        <p>
            <Link to="/OpenAccount" style={{fontSize:"1.2vw",color:"#116A7B"}} className="">New User? Register Now</Link>
          </p>
      </div>
    </div>
    </div>
  );
}

export default UserLogins;
