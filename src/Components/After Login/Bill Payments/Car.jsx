import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Car() {

  const navigate = useNavigate()
  const [cookies, setcookies, removecookies] = useCookies()
  const [PolicyDetails, SetPolicyDetails] = useState({
    VehicleNumber:"",
    InsuranceCompany: "",
    Amount : "",
    OldPolicyNumber:""
  })

  const formik = useFormik({
    initialValues:{
      VehicleNumber:"",
      InsuranceCompany : "",
      Amount : "",
      OldPolicyNumber  : ""
    },

    onSubmit:(values)=>{
      axios({
        method:"post",
        url:`http://127.0.0.1:5001/CarInsurance/${cookies.userid}`,
        data:values
      })
      navigate(`/BillPay/${cookies.userid}`)
    }
  })

  return (
    <div>
            <NavigationBar></NavigationBar>
            <div className='container-xxl mt-5 text-center'>
                <div>
                    
                        <div className='card text-center '>
                            <h3 className='m-4'>DTH Bill Payment</h3>
                            <div className=''>
                                
                                <dt className='m-3' ><input style={{width:"50vw", padding:"1vw 2vw", }} type='text' name='VehicleNumber' className='rounded' onChange={formik.handleChange} placeholder="Vehicle Number" ></input></dt>
                                <dt className='m-3' ><input style={{width:"50vw", padding:"1vw 2vw", }} type='text' name='InsuranceCompany' className='rounded' onChange={formik.handleChange} placeholder="Insurance Company" ></input></dt>
                                <dt className='m-3' ><input style={{width:"50vw", padding:"1vw 2vw", }} type='text' name='Amount' className='rounded' onChange={formik.handleChange} placeholder="Amount" ></input></dt>
                                <dt className='m-3' ><input style={{width:"50vw", padding:"1vw 2vw", }} type="text" name='OldPolicyNumber' onChange={formik.handleChange} className='rounded'  placeholder="Old Policy Number" /></dt>
                                <button className='btn btn-success mb-5 m-3' data-bs-toggle="modal" data-bs-target="#modal" >Pay</button>
                            </div>
                        </div>
            
                </div>

                <div className='modal fade' id="modal">
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <div className='modal-title fs-4'>Confirm Details</div>
                                <div> <span className='bi bi-x-lg fs-4' data-bs-dismiss="modal"></span></div>
                            </div>
                            <div className='modal-body'>
                                <dt>Vehicle Number : {formik.values.VehicleNumber}</dt>
                                <dt>Insurance Company : {formik.values.InsuranceCompany}</dt>
                                <dt>Amount : {formik.values.Amount}</dt>
                                <dt>Old Policy Number : {formik.values.OldPolicyNumber}</dt>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-danger' data-bs-dismiss="modal"> <span className='bi bi-pen'></span> Edit</button>
                                <button className='btn btn-success' data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#model" onClick={formik.handleSubmit}> <span className='bi bi-check'></span> Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal fade' id="model">
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <div className='modal-title fs-4'>Confirm Paymment</div>
                                <div data-bs-dismiss="modal"> <span className='bi bi-x-lg fs-4' ></span></div>
                            </div>
                            <div className='modal-body'>
                                <dt className='text-success'>Recharge Done Successfully</dt>
                            </div>

                        </div>
                    </div>
                </div>

                </div>
        </div>

    )
}

export default Car