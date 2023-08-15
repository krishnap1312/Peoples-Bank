import React, { useEffect } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function AccountSumary() {
    const [cookies, setCookies, removeCookies] = useCookies()
    const navigate = useNavigate()

    useEffect(()=>{
        if(cookies.userid==undefined||cookies.userid==""){
            navigate("/UserLogin")
        }
    },[])

  return (
    <div>
        <NavigationBar/>
        <div className='container-xxl mt-4 border border-3 border-dark' >
            <table className='table'>
                <thead className=''>
                    <th className='border border-1 border-dark p-2'>Date</th>
                    <th className='border border-1 border-dark p-2'>Particulars</th>
                    <th className='border border-1 border-dark p-2'>Dr.</th>
                    <th className='border border-1 border-dark p-2'>Cr.</th>
                </thead>
                <tbody>
                    <tr>
                        <td>18-8-2023</td>
                        <td>Transfered to Lakshmi</td>
                        <td><span className='text-danger fw-bold'>744896912</span></td>
                        <td><span className='text-success fw-bold'></span></td>
                    </tr>
                    <tr>
                        <td>15-8-2023</td>
                        <td>Received from Krishna</td>
                        <td> <span className='text-danger fw-bold'></span></td>
                        <td> <span className='text-success fw-bold'>744896912</span></td>
                    </tr>
                    <tr>
                        <td>30-8-2023</td>
                        <td>Rent Received</td>
                        <td><span className='text-danger fw-bold'></span></td>
                        <td><span className='text-success fw-bold'>894572</span></td>
                    </tr>
                    <tr>
                        <td>1-9-2023</td>
                        <td>Received from PNB (interest)</td>
                        <td><span className='text-danger fw-bold'></span></td>
                        <td><span className='text-success fw-bold'>74912</span></td>
                    </tr>
                    <tr>
                        <td>15-8-2023</td>
                        <td>Bill Paid</td>
                        <td><span className='text-danger fw-bold'>74847</span></td>
                        <td><span className='text-success fw-bold'></span></td>
                    </tr>
                    <tr>
                        <td>15-10-2023</td>
                        <td>Transfered to Krishna</td>
                        <td><span className='text-danger fw-bold'>844484</span></td>
                        <td><span className='text-success fw-bold'></span></td>
                    </tr>
                    <tr>
                        <td>15-10-2023</td>
                        <td>Received Rent </td>
                        <td><span className='text-danger fw-bold'></span></td>
                        <td><span className='text-success fw-bold'>884582</span></td>
                    </tr>

                </tbody>
            </table>
        </div>
            <h5 className='container text-danger'>Note: The Data Represented is dummy data. It is for presentation purpose only</h5>
    </div>
  )
}

export default AccountSumary