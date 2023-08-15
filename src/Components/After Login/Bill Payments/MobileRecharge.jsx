import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit'

function MobileRecharge() {

    const [cookies, setcookies, removecookies] = useCookies()
    const navigate = useNavigate()

    useEffect(() => {

    })

    const [calues, setcalues] = useState({
        mobileNumber: "",
        Operator: "",
        RechargePlan: ""
    })
    const formik = useFormik({
        initialValues: {
            mobileNumber: "",
            Operator: "",
            RechargePlan: ""
        },
        onSubmit: (values => {
            axios({
                method: "post",
                url: `http://127.0.0.1:5001/PayDTH/${cookies.userid}`,
                data: values
            })
            navigate(`/BillPay/${cookies.userid}`)
            // console.log("hit");

        })
    })
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='container-xxl mt-5 text-center'>
                <div>
                    
                        <div className='card text-center '>
                            <h3 className='m-4'>Mobile Bill Payment</h3>
                            <div className=''>
                                <dt className='d-flex justify-content-center'>
                                    <select name="Operator" id="" className='dropdown-item w-25 border border-dark border-opacity-25' style={{ fontSize: "1vw", padding: ".5vw", color: "#164B60" }} onChange={formik.handleChange}>
                                        <option name="Operator" onClick={formik.handleChange} value="None">Please choose the Operator</option>
                                        <option name="Operator" onClick={formik.handleChange} value="BSNL">BSNL</option>
                                        <option name="Operator" onClick={formik.handleChange} value="Airtel">Airtel</option>
                                        <option name="Operator" onClick={formik.handleChange} value="Jio">Jio</option>
                                        <option name="Operator" onClick={formik.handleChange} value="MTNL">MTNL</option>
                                        <option name="Operator" onClick={formik.handleChange} value="Voda-Idea">Voda-Idea</option>
                                    </select>
                                </dt>
                                <div style={{ margin: "5vw 20vw" }}>
                                    <MDBInput className='col col-12' type='tel' inputMode='numeric' name="mobileNumber" onChange={formik.handleChange} label="Mobile Number" style={{ margin: "2.5vw", padding: "1.2vw " }}></MDBInput>
                                    <MDBInput className='col col-12' type='tel' inputMode='numeric' name="RechargePlan" onChange={formik.handleChange} label="Amount / Plan" style={{ margin: "2.5vw", padding: "1.2vw " }}></MDBInput>
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
                                        <dt>Mobile Number : {formik.values.mobileNumber}</dt>
                                        <dt>Operator : {formik.values.Operator}</dt>
                                        <dt>Recharge Plan : {formik.values.RechargePlan}</dt>
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
        </div>
    )
}

export default MobileRecharge