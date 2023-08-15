import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'

function TransferFunds() {
    const [cookies, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate();
    const params = useParams()
    useEffect(()=>{
        if(cookies.userid=="" || cookies.userid==undefined){
            navigate("/UserLogin");
        }
        
    },[]);
    const formik = useFormik({
        initialValues:{
            ReceiverName : "",
            ReceiverAccountNumber : "",
            ReceiverIFSCCOde : "",
            ReceiverBankName : "",
            ReceiverMICRCode : "",
            Amount : 0,
            TransferDescription : "",
        },

        onSubmit: (values=>{
            axios({
                method:"put",
                url : `http://127.0.0.1:5000/TransferFunds/${params.userid}`,
                data : values
            })
                alert("Updated Successfully");
                navigate("/LoginHome")
        })
    })

    
    return (
    <div>
        <NavigationBar></NavigationBar>
        <div className='mt-5'>
            <form className='d-flex justify-content-evenly' onSubmit={formik.handleSubmit}>
                <div>
                <h2>Fund Transfer</h2>
                <dl className='justify-content-evenly'>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="ReceiverName" className='border rounded border-1  border-dark' id="ReceiverName" placeholder='Enter Receiver Name' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="ReceiverAccountNumber" className='border rounded border-1  border-dark' id="ReceiverAccountNumber" placeholder='Enter Receiver Account Number' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="ReceiverIFSCCOde" className='border rounded border-1  border-dark' id="ReceiverIFSCCOde" placeholder='Enter Receiver IFSC COde' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="ReceiverBankName" className='border rounded border-1  border-dark' id="ReceiverBankName" placeholder='Enter Receiver Bank Name' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="ReceiverMICRCode" className='border rounded border-1  border-dark' id="ReceiverMICRCode" placeholder='Enter Receiver MICR Code' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="Amount" className='border rounded border-1  border-dark' id="Amount" placeholder='Enter Amount' onChange={formik.handleChange} /></dd>
                    <dd><input type="text" style={{padding:".5vw", fontSize:"1.3vw", width:"60vw"}} name="TransferDescription" className='border rounded border-1  border-dark' id="TransferDescription" placeholder='Enter Transfer Description' onChange={formik.handleChange} /></dd>
                </dl>
                <button className='btn btn-success '>Transfer</button>
                </div>
            </form>
        </div>


    </div>
  )
}

export default TransferFunds