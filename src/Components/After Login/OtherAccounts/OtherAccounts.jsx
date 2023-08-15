import React, { useEffect, useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function OtherAccounts() {

  const navigate = useNavigate()
  
  const [cookies, setCookies, remnoveCookies] = useCookies()
  const [userdata, setUserData] = useState([{
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
          FDAccountNumber: "",
          RecAccountNumber: "",
          PPFAccountNumber: "",
          
  }]);

  useEffect(()=>{
    axios({
      method:"get",
      url:`http://127.0.0.1:5001/Customer/${cookies.userid}`,
    }).then(response=>{  
      setUserData(response.data)
      console.log(userdata[1]);
    })
    if(cookies.userid==undefined || cookies.userid==""){
      navigate("/UserLogin");
  }
  },[cookies.userid, navigate])

  return (
    <div>
        <NavigationBar></NavigationBar>
        <div className='' style={{marginLeft:"", marginTop:"5vw"}}>
          <div>
            <div className='' ><h1 style={{fontSize:"5vw", justifyContent:"center", display:"flex"}}>Hi, {userdata[0].FDAccountNumber} </h1></div>
            <div style={{fontSize:"2vw", marginBottom:"3vw", justifyContent:"center", display:"flex"}}>List Of Accounts: </div>
            <dt style={{margin:" 1vw 38%"}}>FD Account : {userdata[0].FDAccountNumber}</dt>
            <dt style={{margin:" 1vw 38%"}}>PPF Account : {}</dt>
            <dt style={{margin:" 1vw 38%"}}>Recurring Account : {}</dt>
            
            <dt></dt>
            <dt></dt>
          </div>
        </div>
    </div>
  )
}

export default OtherAccounts