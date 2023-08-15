import axios from 'axios'
import { useFormik } from 'formik'
import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./PosterRegister.Css"

function PosterRegister() {

  const navigate = useNavigate()  

  const formik= useFormik({
    initialValues:{
      JobPosterName : "",
      JobPosterID:"",
      JobPosterPassword:"",
      JobPosterBranch : "",
      JobPosterContactNumber : "",
      JobPosterEmailID : ""
    },
    onSubmit:(values=>{
      axios({
        method:"post",
        url:`http://127.0.0.1:5002/JobPosterRegister`,
        data:values
      }).then(()=>{
        alert("User Registered Successfully")
        navigate("/JobPosterLogin")
    })
    })
  })


  return (
    <div>
      <div style={{backgroundColor:"#AAC8A7"}}>
            <nav className='d-flex justify-content-evenly' style={{backgroundColor:""}}>
                <img src="/logotrans.png" style={{width:"32vw"}} alt="" />
                <dt className='d-flex align-items-center' style={{fontSize:"2.5vw"}}><Link  to = "/JobPosterLogin" className='text-decoration-none linkColor'> Poster Login </Link> </dt>
                <dt className='d-flex align-items-center' style={{fontSize:"2.5vw"}}><Link  to = "/JobPosterRegister" className='text-decoration-none linkColor'> Poster Register </Link> </dt>
            </nav>
      </div>

      <div>

        <form style={{margin:"4vw 20vw"}}>
        <dt style={{fontSize:"4vw", textAlign:"center", color:"#2D4356", fontFamily:"lucid"}} >Register Job Poster</dt>
            <MDBInput type='text' style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster Name" name='JobPosterName' onChange={formik.handleChange}></MDBInput>
            <MDBInput type='text' style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster ID" name='JobPosterID' onChange={formik.handleChange}></MDBInput>
            <MDBInput type='password' style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster Password" name='JobPosterPassword' onChange={formik.handleChange}></MDBInput>
            <MDBInput type='text' style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster Branch" name='JobPosterBranch' onChange={formik.handleChange}></MDBInput>
            <MDBInput type='tel' pattern='[0-9]*' inputmode="numeric" style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster Contact Number" name='JobPosterContactNumber' onChange={formik.handleChange}></MDBInput>
            <MDBInput type='text' style={{margin:"1.20vw 0vw", fontSize:"1.5vw", padding:"1.2vw"}} labelStyle={{fontSize:"1.5vw"}} label="Job Poster Email ID" name='JobPosterEmailID' onChange={formik.handleChange}></MDBInput>
            <div className='d-flex'>
                <button className='btn btn-dark' style={{margin:"0vw 10vw", padding:".8vw", fontSize:"1.5vw"}} onClick={formik.handleSubmit}>Register</button>
                <button className='btn btn-dark' style={{margin:"0vw 10vw", padding:".8vw", fontSize:"1.5vw"}}>Reset</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default PosterRegister