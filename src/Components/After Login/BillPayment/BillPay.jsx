import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'

function BillPay() {

    const [cookies, setCookie, removeCookie] = useCookies()

    useEffect(()=>{
        if(cookies.userid=="" || cookies.userid==undefined){
            navigate("/UserLogin");
        }  
    })

    const navigate = useNavigate()
    const handleSignout = () =>{
        removeCookie('userid')
        navigate("/UserLogin")
    }

  return (
    <div>
        <NavigationBar></NavigationBar>
        <div className='text-center'>
          <div><dt className='p-5 ' style={{fontSize:"2vw", color:"#213555"}}>Bill Payment</dt></div>
          <div className='contianer d-flex justify-content-evenly flex-wrap container-fluid'>
            <Link to={`/mobile/${cookies.userid}`}><div>
              <div><img src="/mobile.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Pay Mobile Bill</div>
            </div></Link>

            <Link to={`/satelite/${cookies.userid}`}><div>
              <div><img src="/satelite.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Pay DTH Bill</div>
            </div></Link>

            <Link to={`/faucet/${cookies.userid}`}><div>
              <div><img src="/faucet.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Pay Water Bill</div>
            </div></Link>

            <Link to={`/life/${cookies.userid}`}><div>
              <div><img src="/life-insurance.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Pay LIC Permium</div>
            </div></Link>

            <Link to={`/barrier/${cookies.userid}`}><div>
              <div><img src="/barrier.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Recharge Fastag</div>
            </div></Link>

            <Link to={`/car/${cookies.userid}`}><div>
              <div><img src="/car-insurance.png" className=' m-4' style={{width:"10vw", height:"10vw"}} alt="" /></div>
              <div>Vehicle Insurance</div>
            </div></Link>

          </div>
        </div>
        </div>
    
  )
}

export default BillPay