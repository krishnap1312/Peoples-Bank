import React from 'react'
import { Link } from 'react-router-dom'

function BudgetCal() {
  return (
    <div>
    <div>
        <div className='d-flex justify-content-between'>


          <nav className='justify-content-evenly navbar navbar-light navColor ' style={{ fontSize: "1.792vw", width:"100vw" }}>
            <div>
              <img src="LogoTrans.png" className='m-3 imgColor' style={{ width: "25vw" }} alt="" />

            </div>
            <div className='d-flex m-5 '>
              <div className='m-4 mt-5  fw-bold '><Link to="/Home" className='text-decoration-none text-white'>Home</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/Careers" className='text-decoration-none text-white'>Careers</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/Calculator" className='text-decoration-none text-white'>Calculator</Link> </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/ContactUs" className='text-decoration-none text-white'>Contact Us</Link>  </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/AboutUs" className='text-decoration-none text-white'>About Us</Link>  </div>
              <div className='m-4 mt-5  fw-bold '><Link to="/UserLogin" className='text-decoration-none text-white'>User Login</Link> </div>
              <div></div>
            </div>
          </nav>
        </div>
      </div>
      <nav className='d-flex justify-content-evenly mb-5' style={{backgroundColor:"#393E46"}}>
            <h1><Link className='text-white text-decoration-none fs-5' to="/LoanCalculator">Loan Calculator</Link></h1>
            <h1><Link className='text-white text-decoration-none fs-5' to="/MortgageCalculator">Mortgage Calculator</Link></h1>
            <h1><Link className='text-white text-decoration-none fs-5' to="/SavingsCalculator">Savings Calculator</Link></h1>
            <h1><Link className='text-white text-decoration-none fs-5' to="/RetirementCalculator">Retirement Calculator</Link></h1>
            
        </nav>

      <div className='container-xxl'>

        <div>
          Budget Calculator
        </div>

      </div>

    </div>
  )
}

export default BudgetCal