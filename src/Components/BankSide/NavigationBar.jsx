import axios from 'axios';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {

  const navigate = useNavigate()
  const [cookies,setCookies, removeCookies] = useCookies()

  useEffect(()=>{
    console.log(cookies)
    if(cookies.JobPosterID==undefined || cookies.JobPosterID==""){
      navigate("/JobPosterLogin")
      console.log("Not nill");
    }
  },[cookies])

  const LogOutHandle = ()=>{
    navigate("/JobPosterLogin");
    removeCookies("JobPosterID")
  }

  return (
    <div>
        <div>
        <nav className="d-flex" style={{ backgroundColor: "#F7FFE5" }} ><img src="/logotrans.png" style={{ width: "25vw" }} alt="" />
          <div className="d-flex align-items-center" >
            <ul className="d-flex list-unstyled justify-content-between ">
              <div className="" style={{ margin: "0vw 5vw", fontSize: "1.5vw", fontWeight: "bold" }}><Link to={`/JobHome/${cookies.JobPosterId}`} className="navtext text-decoration-none"><li>Home</li></Link></div>
              <div className="" style={{ margin: "0vw 5vw", fontSize: "1.5vw", fontWeight: "bold" }}><Link to={`/AllJobs/${cookies.JobPosterId}`} className="navtext text-decoration-none"><li>ALL Job Posted</li></Link></div>
              <div className="" style={{ margin: "0vw 5vw", fontSize: "1.5vw", fontWeight: "bold" }}><Link to={`/JobPosterProfile/${cookies.JobPosterId}`} className="navtext text-decoration-none"><li>Profile</li></Link></div>
              <div className="" style={{ margin: "0vw 5vw", fontSize: "1.5vw", fontWeight: "bold" }}><Link to={`/JobPosterLogin`} className="navtext text-decoration-none" onClick={LogOutHandle}><li>LogOut</li></Link></div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar