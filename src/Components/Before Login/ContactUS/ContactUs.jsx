
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
    

    const Formik = useFormik({
      initialValues:{
        FirstName : "",
        LastName : "",
        EmailID : "",
        Age : "",
        CustomerAccountNumber : "",
        Subject:"",
        Message : ""
      },

      onSubmit:(values)=>{
        console.log(values)
      }
    })

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5001/AllCustomers`
        }).then((response)=>{
            console.log(response.data)
        })
        
       
    })


  return (
    <div>
        <div><NavigationBar></NavigationBar></div>
        <div>
        
        <div className='container-xxl mt-5'>
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p style={{fontSize:"1.2vw"}}><strong>Phone:</strong> 1234567890</p>
          <p style={{fontSize:"1.2vw"}}><strong>Email:</strong> info@peoplesbank.com</p>
          <p style={{fontSize:"1.2vw"}}><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
        <form className="contact-form" onSubmit={Formik.handleSubmit} style={{margin:"5vw 10vw"}}>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="FirstName" name='FirstName' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="LastName" name='LastName' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="EmailID" name='EmailID' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="Age" name='Age' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="CustomerAccountNumber" name='CustomerAccountNumber' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="Subject" name='Subject' ></MDBInput>
          <MDBInput style={{margin:"1vw ", padding:"1.8vw 0vw", fontSize:"1.2vw"}} labelStyle={{fontSize:"1.2vw"}} label="Message" name='Message'  ></MDBInput>
          <div className='d-flex justify-content-evenly' style={{margin:"2.5vw 0vw"}}>
            <button className='btn btn-dark' style={{fontSize:"1.2vw"}}>Submit</button>
            <button className='btn btn-dark' style={{fontSize:"1.2vw"}}>Reset</button>
          </div>
        </form>
      </div>
        </div>
    </div>
  )
}

export default ContactForm