import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

function NavigationBar() {
    const [ cookies, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.userid==undefined || cookies.userid==""){
            navigate("/UserLogin")
        }
    })

    const handleSignout = () =>{
        removeCookie("userid")
        navigate("UserLogin")
    }


  return (
    <div>
        <nav className='d-flex justify-content-evenly m-4' style={{backgroundColor:"#0B2447",fontSize:"1vw" ,color:"#ffffff" ,boxShadow:"0vw 0vw 1.2vw 0vw #27374D", margin:"" }}>
        
        <div><img src="LogoTrans.png" width={100} style={{backgroundColor:"red"}} alt="" /></div>
        <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/LoginHome/${cookies.userid}`} className='text-decoration-none text-white'> Home </Link></dt>
            </div>

          </div>
          
          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/AccountSummary/${cookies.userid}`} className='text-decoration-none text-white'>Account Summary</Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/TransferFunds/${cookies.userid}`} className='text-decoration-none text-white'>Tranfer Funds </Link></dt>
              
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/BillPay/${cookies.userid}`} className='text-decoration-none text-white'>Bill Pay </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/Statement/${cookies.userid}`} className='text-decoration-none text-white'>Statements </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/OtherAccounts/${cookies.userid}`} className='text-decoration-none text-white'>Other Accounts </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/Help/${cookies.userid}`} className='text-decoration-none text-white'>Help/FAQ </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/AccountManagement/${cookies.userid}`} className='text-decoration-none text-white'>Account Management </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to={`/contactus/${cookies.userid}`} className='text-decoration-none text-white'>Contact Us </Link></dt>
            </div>

          </div>

          <div className='' style={{margin:"3vw 1.2vw"}}>
            <div>
              <dt><Link to='/UserLogin' onClick={handleSignout} className='text-decoration-none text-white'>Logout </Link></dt>
            </div>

          </div>
        </nav>
    </div>
  )
}

export default NavigationBar