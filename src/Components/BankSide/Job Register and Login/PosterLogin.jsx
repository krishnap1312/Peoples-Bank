import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Job.css"
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useFormik } from 'formik'
import { MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useEffect } from 'react'

function PosterLogin() {

  const [cookies, setcookies, removecookies] = useCookies()
  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState({ display: "none" })

  const [UserData, SetUserData] = useState({
    JobPosterID: "",
    JobPosterPassword: "",
  })

  const formik = useFormik({
    initialValues: {
      JobPosterID: "",
      JobPosterPassword: ""
    },
    onSubmit: ((values) => {
      console.log("c1");
      axios({
        method: "get",
        url: `http://127.0.0.1:5002/AllJobPoster`,
      }).then((response) => {
        for (var user of response.data) {
          console.log(response.data[0]);
          if (
            user.JobPosterID === values.JobPosterID &&
            user.JobPosterPassword === values.JobPosterPassword) {
            setcookies("JobPosterID", values.JobPosterID);
            navigate(`/JobPoster/${values.JobPosterID}`)
            console.log("ok");
            break;
          }
          else {

            setErrorMsg({ display: "", textAlign: "center", fontSize: "2vw", color: "red" })
            console.log("Invalid");
          }
        }
      })
    })
  })




  return (
    <div>
      <div style={{ backgroundColor: "#AAC8A7" }}>
        <nav className='d-flex justify-content-evenly' style={{ backgroundColor: "" }}>
          <img src="/logotrans.png" style={{ width: "32vw" }} alt="" />
          <dt className='d-flex align-items-center' style={{ fontSize: "2.5vw" }}><Link to="/JobPosterLogin" className='text-decoration-none linkColor'> Poster Login </Link> </dt>
          <dt className='d-flex align-items-center' style={{ fontSize: "2.5vw" }}><Link to="/JobPosterRegister" className='text-decoration-none linkColor'> Poster Register </Link> </dt>
        </nav>
      </div>

      <div>
        <form className='' style={{ width: "50vw", margin: "4vw 25vw " }}>
          <dt style={{ fontSize: "4vw", textAlign: "center", color: "#2D4356", fontFamily: "lucid" }} >Job Poster Login</dt>
          <MDBInput type='text' onChange={formik.handleChange} name='JobPosterID' style={{ padding: "1.5vw", fontSize: "2vw", margin: "1vw", }} label="Job Poster ID" labelStyle={{ fontSize: "2vw" }}></MDBInput>
          <MDBInput type='password' onChange={formik.handleChange} name='JobPosterPassword' style={{ padding: "1.5vw", fontSize: "2vw", margin: "1vw", }} label="Password" labelStyle={{ fontSize: "2vw" }}> </MDBInput>
          <dt style={errorMsg}>Invalid Credentials</dt>
          <div className='d-flex justify-content-evenly'>
            <button className='btn btn-dark' style={{ padding: "1vw", fontSize: "1.2vw" }} onClick={formik.handleSubmit}>Login</button>
            <button className='btn btn-dark' style={{ padding: "1vw", fontSize: "1.2vw" }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PosterLogin