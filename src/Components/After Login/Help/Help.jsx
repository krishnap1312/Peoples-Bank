import React, { useEffect, useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

function Help() {

    const [data,setdata] = useState([{
        UserID : "",
        EmailID:"",
        FirstNam:"",
        LastName:"",
        CustomerAccountNumber:""
    }])

    

    const [cookies, setCookies, remnoveCookies] = useCookies()

    const navigate = useNavigate()

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5001/Customer/${cookies.userid}`,

        }).then(response=>{
            setdata(response.data)
        })
    },[100])

    const formik = useFormik({
        initialValues:{
            UserID:"",
            EmailID:"",
            FirstName:"",
            LastName:"",
            AccountNumber:"",
            AreaOfQuery : "",
            Queries : "",
        },
        // validationSchema:yup.object({
        //     UserID : yup.string().required("Required"),
        //     EmailID : yup.string().required("Required"),
        //     FirstName : yup.string().required("Required"),
        //     LastName : yup.string().required("Required"),
        //     AccountNumber : yup.string().required("Required"),
        //     AreaOfQuery : yup.string().required("Required"),
        //     Queries : yup.string().required("Required"),
        // })
            
        onSubmit:(Values=>{
            
            axios({
                method:"post",
                url:`http://127.0.0.1:5001/AllQueries/:${cookies.userid}`,
                data: Values
            })
            navigate("/LoginHome/${cookies.userid}")
        })
    })

    

    const handleResets = () =>{
        formik.resetForm()
    }
    

  return (
    <div>
        <div>
            <div><NavigationBar></NavigationBar></div>
        </div>
        <div>
            <div className='d-flex justify-content-evenly' style={{fontSize:"3vw", marginTop:"1vw", color:"#001C30"}}><dt>Help/FAQ</dt></div>
            <div className='' style={{marginLeft:"20vw"}}>
                
                    <div className=' row' style={{ marginLeft:""}}>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> User-ID </dt> <input type="text" className='w-75'  name="UserID" id=""   onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> Email-ID </dt> <input type="text" className='w-75'  name="EmailID" id=""   onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> First Name </dt> <input type="text" className='w-75'  name="FristName" id=""   onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> Last Name </dt> <input type="text" className='w-75'  name="LastName" id=""   onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> Account Number </dt> <input type="text" className='w-75'  name="AccountNumber" id=""   onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> Area Of Query </dt> <input type="text" className='w-75 ' name="AreaOfQuery" id="" onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}><dt> Query </dt> <input type="text" className='w-75 ' name="Queries" id="" onChange={formik.handleChange} required="true" /></div>
                    <div className='col col-12 ms-12 mt-3' style={{fontSize:"1.5vw"}}>
                    <button className="btn btn-success ms-3" data-bs-toggle="modal" data-bs-target="#modal" style={{ color:"#F7F5EB", fontSize:"1.2vw", padding:".8vw", fontWeight:"bold" }}>Submit</button>
                    <button className="btn btn-danger ms-3" onClick={handleResets} style={{ color:"#F7F5EB", fontSize:"1.2vw", padding:".8vw", fontWeight:"bold"}}>Reset</button></div>
                    </div>
                    
                
            </div>

            <div className="modal fade" id="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Job Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  Job Title1: {formik.values.UserID}
                </p>
                <p>
                  Job Title12 : {formik.values.EmailID}
                </p>
                <p>
                  Job Title123 : {formik.values.FirstName}
                </p>
                <p>
                  Job-ID : {formik.values.LastName}
                </p>
                <p>
                  Company Description : {formik.values.AccountNumber}
                </p>
                <p>
                  Job Description : {formik.values.AreaOfQuery}
                </p>
                <p>
                  Job Locations : {formik.values.Queries}
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >
                  Edit <span className='bi bi-pen'></span>
                </button>
                <button type="button" className="btn btn-primary " data-bs-dismiss="modal" onClick={formik.handleSubmit} data-bs-toggle="modal" data-bs-target="#model">
                  Send <span className='bi bi-arrow-right'></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="model">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sent Successfully</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h1>FAQ Submitted Successfully</h1>
              </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div></div>
        </div>
    </div>
  )
}

export default Help