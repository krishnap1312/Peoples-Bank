import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useFormik } from 'formik'

function Faucet() {
  
  const [calues,setcalues] = useState({
    mobileNumber : "",
    Operator : "",
    RechargePlan : ""
})
const formik= useFormik({
    initialValues:{
        mobileNumber:"",
        Operator : "",
        RechargePlan : ""
    },
    onSubmit : (values=>{
        console.log(values)
        setcalues(values)
        console.log(calues)
    })
})
  
  return (
    <div>
      <div><NavigationBar></NavigationBar></div>

      <div className='container-xxl mt-5 text-center'>
        <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='card text-center '>
                <h3 className='m-4'>DTH Bill Payment</h3>
                <div className=''>
                    <dt className='d-flex justify-content-center'>
                        <select name="Operator" id="" className='dropdown-item w-25 border border-dark border-opacity-25' style={{fontSize:"1vw", padding:".5vw", color:"#164B60"}} onChange={formik.handleChange}>
                            <option name="Operator" onClick={formik.handleChange} value="None">Please the State</option>
                            <option name="Operator" onClick={formik.handleChange} value="Airtel">Chhattisgarh</option>
                            <option name="Operator" onClick={formik.handleChange} value="Jio">Tamil Nadu</option>
                            <option name="Operator" onClick={formik.handleChange} value="Voda-Idea">Karnataka</option>
                        </select>
                    </dt>
                    <dt className='m-3'>Customer ID Number : <input type='text' name='mobileNumber' className='rounded' onChange={formik.handleChange}></input></dt>
                    <dt className='m-3'>Bill Amount :  <input type="text" name='RechargePlan' onChange={formik.handleChange} className='rounded' /></dt>
                    <button className='btn btn-success mb-5 m-3' >Pay</button>
                    <dt></dt>
                </div>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Faucet