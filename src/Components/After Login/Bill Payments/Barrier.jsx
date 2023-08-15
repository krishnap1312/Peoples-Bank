import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useFormik } from 'formik'
import axios from 'axios'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
function Barrier() {

  const [cookies, setCookies, remnoveCookies] = useCookies()

  const navigate = useNavigate()

  useEffect(() => {

  })

  const [Fastag, SetFastag] = useState({
    Company: "",
    vehicleNumber: "",
    Amount: 0,

  })

  const formik = useFormik({
    initialValues: {
      Company: "",
      vehicleNumber: "",
      Amount: ""
    },

    onSubmit: (Values) => {
      axios({
        method:"post",
        url:`http://127.0.0.1:5001/FastagRecharge/${cookies.userid}`,
        data:Values
      })
      navigate(`/BillPay/${cookies.userid}`)
    }
  })

  return (
    <div>
      <div><NavigationBar></NavigationBar></div>

      <div>
        <div className='d-flex justify-content-center mt-4'><dt style={{ fontSize: "4vw", fontFamily: "monospace" }}>Fastag Recharge</dt></div>
        <div>
          <form onSubmit={formik.handleSubmit} className='d-flex justify-content-evenly mt-4 flex-wrap row'>
            <dt className='col col-12 text-center'><input type="text" onChange={formik.handleChange} style={{ width: "40vw", borderRadius: "4vw 98vw 98vw 4vw", padding: "1.2vw ", margin: "1.0vw", fontSize: "1.2vw", fontWeight: "bold" }} name="Company" placeholder='Enter Company' id="" /></dt>
            <dt className='col col-12 text-center'><input type="text" onChange={formik.handleChange} style={{ width: "40vw", borderRadius: "4vw 98vw 98vw 4vw", padding: "1.2vw ", margin: "1.0vw", fontSize: "1.2vw", fontWeight: "bold" }} name="vehicleNumber" placeholder='Enter vehicle Number' id="" /></dt>
            <dt className='col col-12 text-center'><input type="number" id="numberInput" inputmode="numeric" onChange={formik.handleChange} style={{ width: "40vw", borderRadius: "4vw 98vw 98vw 4vw", padding: "1.2vw ", margin: "1.0vw", fontSize: "1.2vw", fontWeight: "bold" }} name="Amount" placeholder='Enter Amount'></input></dt>
            <dt className='col col-12 text-center'><input type="button" className='rounded-4' data-bs-toggle="modal" data-bs-target="#modal" style={{ padding: ".1vw 10vw", margin: "1.0vw", fontSize: "2.2vw", fontWeight: "bold", color: "green", backgroundColor: "yellow" }} value="Recharge" id="" /></dt>
          </form>
        </div>

        <div className='modal fade' id="modal">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <div className='modal-title'>Confirm Details</div>
              </div>
              <div className='modal-body'>
                <div className='h-2'> Company : {formik.values.Company}</div>
                <div className='h-2'> vehicle Number : {formik.values.vehicleNumber}</div>
                <div className='h-2'> Amount : {formik.values.Amount}</div>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-danger'>Reset</button>
                <button type='submit' className='btn btn-success' onClick={formik.handleSubmit} data-bs-toggle="modal" data-bs-target="#model">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className='modal fade' id="model">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header text-success'>
                <div className='header-title'>Confirmation</div>
              </div>
              <div className='modal-body'><div>Recharge Done Successfully</div></div>
              <div className='modal-footer'></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Barrier