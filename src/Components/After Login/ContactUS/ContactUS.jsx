
import React, { useEffect, useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit'

function ContactForm() {

  const [cookies, setcookies, remnoveCookies] = useCookies()
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      EmailID: "",
      Age: 0,
      CustomerAccountNumber: "",
      Subject: "",
      Message: ""
    },

    onSubmit: (values) => {
      axios({
        method:"post",
        url:`http://127.0.0.1:5001/ContactUS/${cookies.userid}`,
        data : values
      })
      navigate("/LoginHome/${cookies.userid}")
      
    }
  })

  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:5001/Customer/${cookies.userid}`
    }).then((response) => {
      
    })

    if (cookies.userid == undefined || cookies.userid == "") {
      navigate("/UserLogin")
    }
  })


  return (
    <div>
      <div><NavigationBar></NavigationBar></div>
      <div>

        <div className='container-xxl mt-5'>
          <h1>Contact Us</h1>
          <div className="contact-info">
            <p style={{ fontSize: "1.2vw" }}><strong>Phone:</strong> 1234567890</p>
            <p style={{ fontSize: "1.2vw" }}><strong>Email:</strong> info@peoplesbank.com</p>
            <p style={{ fontSize: "1.2vw" }}><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>
          <div className="contact-form"  style={{ margin: "5vw 10vw" }}>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="FirstName" name='FirstName' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="LastName" name='LastName' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="EmailID" name='EmailID' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="Age" name='Age' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="CustomerAccountNumber" name='CustomerAccountNumber' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="Subject" name='Subject' ></MDBInput>
            <MDBInput style={{ margin: "1vw ", padding: "2.3vw 0vw", fontSize: "1.5vw" }} labelStyle={{ fontSize: "1.5vw" }} onChange={formik.handleChange} label="Message" name='Message'  ></MDBInput>
            <div className='d-flex justify-content-evenly' style={{ margin: "2.5vw 0vw" }}>
              <button className='btn btn-dark' style={{ fontSize: "1.5vw" }} data-bs-toggle="modal" data-bs-target="#modal">Submit</button>
              <button className='btn btn-dark' style={{ fontSize: "1.5vw" }}>Reset</button>
            </div>
          </div>
        </div>
        <div className='modal fade' id="modal">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className="modal-title">Confirm Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className='modal-body'>
                <div className='d-flex'>
                  <dt>
                     First Name : </dt>  <p> {formik.values.FirstName}</p>
                                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Last Name : </dt>  <p> {formik.values.LastName}</p>
                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Email-ID : </dt>  <p> {formik.values.EmailID}</p>
                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Age : </dt>  <p> {formik.values.Age}</p>
                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Customer Account Number : </dt>  <p> {formik.values.CustomerAccountNumber}</p>
                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Subject : </dt>  <p> {formik.values.Subject}</p>
                                                            
                </div>
                <div className='d-flex'>
                  <dt>
                     Message : </dt>  <p> {formik.values.Message}</p>
                                                            
                </div>
                
              </div>
              <div className='modal-footer'>
                <div>
                  <button data-bs-dismiss="modal" className='btn btn-dark'>
                      Edit <span className='bi bi-pen'></span>
                  </button>          
                </div>
                <div>
                  <button data-bs-dismiss="modal" className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#model" onClick={formik.handleSubmit}>
                      Send <span className='bi bi-arrow-right'></span>
                  </button>                          
                </div>
              </div>
            </div>
          </div>
        </div>

            <div className='modal fade' id="model">
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <div className='modal-title'>
                      <h3>Submitted</h3>
                    </div>
                  </div>
                  <div className='modal-body'> Details Submitted Successfully </div>
                  <div className='modal-footer'></div>
                </div>
              </div>
            </div>

      </div>
    </div>
  )
}

export default ContactForm