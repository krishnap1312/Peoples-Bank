
import React, { useState } from 'react'
import "./Loan.css"
import { Link } from 'react-router-dom';

function LoanCalculator() {

    const [InitialValues, setInitialValues ] = useState({
        principalAmount : "",
        ROI:"",
        Term : "",
        RegInveAmount :""
    })

    const [InitialValue, setInitialValue ] = useState({
        principalAmount : "",
        ROI:"",
        Term : "",
        EMI : "",
        RegInveAmount : ""
    })

    const [Display, setDisplay] = useState('none');

    let [M, setM] = useState(0)
    

    
    
    const handleOnChange = (event) =>{
        const {name,value} = event.target
        setInitialValues((values)=>({
            
                ...values,
                [name] : value,
            }))
            
            
            setDisplay(("none"))
            
    }

    const Calculate = () =>{
        
        let PrincipalVal = parseFloat(InitialValues.principalAmount)
        let RegInveAmounts = parseFloat(InitialValues.RegInveAmount)  
        let ROIVal = (parseFloat(InitialValues.ROI)/100)
        let TermVal = parseFloat(InitialValues.Term)  
        
        let inflationRate = parseFloat(7)/100;
let adjustedFutureValue = (PrincipalVal * (((1 + ROIVal) ** TermVal) - 1) / ROIVal) * ((1 + inflationRate) ** TermVal);

        setDisplay("");
        setInitialValue({
          principalAmount: PrincipalVal,
          ROI: ROIVal,
          Term: TermVal,
          EMI: adjustedFutureValue,
          RegInveAmount : RegInveAmounts
        });
        setM(Math.ceil(adjustedFutureValue * TermVal));

        
        
    }

    const onSubmitHandle = (event) =>{
        event.preventDefault()
        const {name,value} = event.target
        
        setDisplay("none")
        Calculate()
    }

    return(
        <>
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

        <div className='text-center ff mt-5' style={{color:"#025464"}}>
            <h1>Retirement Calculator</h1>
        </div>
        
        
       

        <div className='container-xxl mt-5 d-flex text-center justify-content-between '>

        
        
        <div className='card text-center container w-50'>
            <form action="">
                <dl>
                    <dt className='mt-3'> <h3>Regular Yearly Saved Amount</h3></dt>
                    <dd><input type="text" placeholder='Insert Only Numbers' name='RegInveAmount' value={InitialValues.RegInveAmount} className='fs-5 text-center' onChange={handleOnChange} /></dd>
                    
                    <dt className='mt-3'> <h3>Principal Amount</h3></dt>
                    <dd><input type="text" placeholder='Insert Only Numbers' name='principalAmount' value={InitialValues.principalAmount} className='fs-5 text-center' onChange={handleOnChange} /></dd>

                    <dt className='mt-3'> <h3> Rate Of Interest on Savings </h3></dt>
                    <dd><input type="text" placeholder='Insert Only Numbers' name='ROI' value={InitialValues.ROI} className='fs-5 text-center' onChange={handleOnChange} /></dd>

                    <dt className='mt-3'> <h3> Number Of Years left For Retirement </h3></dt>
                    <dd><input type="text" placeholder='Insert Only Numbers' name='Term' value={InitialValues.Term} className='fs-5 text-center' onChange={handleOnChange} /></dd>
                    
                    

                    <dd className='mt-3'>
                        <button onClick={onSubmitHandle}>Calculate</button>
                    </dd>

                </dl>

            </form>
        </div>
        
        <div style={{display:Display}} className='card justify-content-center text-start p-4'>
            
            <div><h3>Total Value: <span className='' style={{color:"#E57C23"}}>{M - InitialValue.principalAmount }</span></h3></div>
            
        </div>
        
        </div>
        
        </>
    )
}

export default LoanCalculator