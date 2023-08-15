import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import "./Calculator.css"
import NavigationBar from '../NavigationBar/NavigationBar';


function CalculatorComponent() {

  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set the desired background color based on the scroll position
      if (scrollPosition > 1) {
        setBackgroundColor('black');
      } else {
        setBackgroundColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
<div>
        
        <NavigationBar></NavigationBar>
      </div>
    <div  style={{
      height: '',
      background: backgroundColor,
      transition: 'background-color 0.5s ease-in-out', 
    }}>
      <div className='d-flex flex-wrap justify-content-evenly'>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="LoanCal.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your loan Amount</h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/LoanCalculator">Loan Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="MortgageCal.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Mortgage Amount</h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/MortgageCalculator">Mortgage Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="SavingsCal.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Savings Amount</h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/SavingsCalculator">Savings Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="RetirementCal.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Retirement Amount</h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/RetirementCalculator">Retirement Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="BudgetCal.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Budget Amount <span className='text-danger '>Coming Soon</span> </h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/BudgetCalculator">Budget Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="CurrencyCon.png" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Currency Amount <span className='text-danger '>Coming Soon</span> </h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/CurrencyCalculator">Currency Calculator</Link></button></div>
          </div>
        </div>

        <div className='card justify-content-evenly flex-wrap m-3 text-center border-dark w-25'>
          
          <div className='m-3'>
            <img src="InvestmentCal.jpeg" style={{width:"20vw"}} alt="" />
            <div><h3 style={{fontSize:"1.5vw"}}>Calculate your Investment Amount <span className='text-danger '>Coming Soon</span> </h3></div>
          <div className='card-footer' style={{backgroundColor:"#EBDC87", width:"auto"}}><button style={{backgroundColor:"#00416D",  width:"min-width"}}><Link className='text-white text-decoration-none ' style={{ fontSize:"2vw", width :"1.5vw"}}  to="/InvestmentCalculator">Investment Calculator</Link></button></div>
          </div>
        </div>




      </div>
    </div>
    </div>
  )
}

export default CalculatorComponent