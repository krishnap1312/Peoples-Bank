import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import axios from 'axios';


function AfterloginHome() {
  const [customer, setCustomer] = useState([{
    
          FirstName : "",
          LastName : "",
          EmailID : "",
          Age : 0,
          City : "",
          State : "",
          PANNumber : "",
          Address : "",
          AadharNumber : "",
          Mobile : "",
          UserID : "",
          Password : "",
          REPassword : "",
          AccountBalance : 0,
          AccountNature : "",
          AccountOpen : "",
          Branch : "",
          CustomerAccountNumber : "",
          CustomerID : "",
          IFSCCode : "",
          MICRCode : "",
  }])
  useEffect(()=>{
    axios({
      method:"get",
      url: `http://127.0.0.1:5001/Customer/${cookies.userid}`,
    }).then(response=>{
      setCustomer(response.data)
    })

    if(cookies.userid==undefined || cookies.userid==""){
        navigate("/UserLogin");
    }
    
},[]);
  const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();



  return (
    <div>
    <NavigationBar></NavigationBar>
      

        <div className='border border-2 border-dark border-opacity-25 container w-50 mt-5'>
          <div className='card mt-3 '><p className='p-2 text-center' style={{fontSize:"2vw"}}>Account Details</p></div>
          <div><p> <h3> Hii <span style={{color:"#F86F03", textDecoration:"underline", textDecorationColor:"#525FE1"}}>{customer[0].FirstName} {customer[0].LastName}</span></h3></p></div>
          <div><p>Account Number : <span className='fw-bold'>{customer[0].CustomerAccountNumber}</span></p></div>
          <div><p>Branch : <span className='fw-bold'>{customer[0].Branch}</span></p></div>
          <div><p>IFSC Code : <span className='fw-bold'>{customer[0].IFSCCode}</span></p></div>
          <div><p>MICR Code : <span className='fw-bold'>{customer[0].MICRCode}</span></p></div>
          <div><p>Account Nature : <span className='fw-bold'>{customer[0].AccountNature}</span></p></div>
          <div><p>Account Opened : <span className='fw-bold'>{customer[0].AccountOpen}</span></p></div>
          <div><p>Account Balance : <span className='fw-bold'>{customer[0].AccountBalance} Cr</span> </p></div>
          
        </div>


      </div>
    
  )
}

export default AfterloginHome