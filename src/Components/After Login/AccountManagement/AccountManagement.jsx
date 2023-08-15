import React, { useEffect } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useCookies } from 'react-cookie'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AccountManagement() {

    const navigate = useNavigate()
    const [cookies, setcookies, remnoveCookies] = useCookies();
    const params = useParams()

    useEffect(()=>{
        axios({
            method:`get`,
            url:`http://127.0.0.1:5001/Customer/${cookies.userid}`,
        })

        if(cookies.userid==undefined || cookies.userid==""){
            navigate("/UserLogin")
        }
    })



  return (
    <div>
        <div><NavigationBar></NavigationBar></div>
        <div className='container' style={{fontSize:"1.5vw", marginLeft:"20vw", marginTop:"2.5vw"}}>
            <div className=''><dt>Profile <span className='bi bi-person-fill'></span></dt></div>
            <div className=''><dt>Open PPF Account</dt></div>
            <div className=''><dt>Profile Password</dt></div>
            <div className=''><dt>Mobile App Settings</dt></div>
            <div className=''><dt>Settings</dt></div>
            <div className=''><dt>Manage Beneficiary</dt></div>
            <div className=''><dt>Locate Branch</dt></div>
        </div>
    </div>
  )
}

export default AccountManagement