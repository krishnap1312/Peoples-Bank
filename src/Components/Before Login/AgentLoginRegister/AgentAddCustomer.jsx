import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function AgentAddCustomer() {
    const [cookies, setcookies, removeCookies] = useCookies()
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.userid==undefined || cookies.userid==""){
            navigate("/AgentLogin")
            removeCookies('userid')
        }
    })
    const formik = useFormik({
        initialValues:{
            CustomerAccountNumber : "",
            CustomerID : "",
            Branch : "",
            IFSCCode : "",
            MICRCode : "",
            AccountNature : "",
            AccountOpen : "",
            AccountBalance : "",
        },
        onSubmit: (values)=>{
            axios({
                method:"put",
                url:`http://127.0.0.1:5000/AgentRegister`
            })
        }
    })

  return (
    <div>
        <div>
            <img src="logos.png" style={{width:"35vw", height:"10vw"}} alt="" />
        </div>
        <div>
            <div>
                <form >
                    <dl>
                        <dt>CustomerAccountNumber</dt>
                        <dd><input type="text" placeholder='' name='CustomerAccountNumber'  /></dd>
                        <dt>CustomerID</dt>
                        <dd><input type="text" placeholder='' name='CustomerID'  /></dd>
                        <dt>Branch</dt>
                        <dd><input type="text" placeholder='' name='Branch'  /></dd>
                        <dt>IFSCCode</dt>
                        <dd><input type="text" placeholder='' name='IFSCCode'  /></dd>
                        <dt>MICRCode</dt>
                        <dd><input type="text" placeholder='' name='MICRCode'  /></dd>
                        <dt>AccountNature</dt>
                        <dd><input type="text" placeholder='' name='AccountNature'  /></dd>
                        <dt>AccountOpen</dt>
                        <dd><input type="text" placeholder='' name='AccountOpen'  /></dd>
                        <dt>AccountBalance</dt>
                        <dd><input type="text" placeholder='' name='AccountBalance'  /></dd>
                    </dl>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AgentAddCustomer