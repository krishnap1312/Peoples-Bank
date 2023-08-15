
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SavingsCal() {

  const [display, setDisplay] = useState("none")
  const [Color, setcolor] = useState("white")


  const [detals, setDetails] = useState({
    TIncome: "",
    Expenditure: "",
    Rent: "",
    EMI: "",
    OtherExp: ""
  })

  let [Anser, setAnswer] = useState({
    SumAvail: 0
  })

  const onChangeHandle = (event) => {
    const { name, value } = event.target
    setDetails(
      (prevalues) => ({
        ...prevalues,
        [name]: value
      })
    )
    setDisplay("none")
  }


  const CalculateSavingsHandle = (event) => {
    let TIncomes = parseFloat(detals.TIncome)
    let Expenditures = parseFloat(detals.Expenditure)
    let Rents = parseFloat(detals.Rent)
    let EMIs = parseFloat(detals.EMI)
    let OtherExps = parseFloat(detals.OtherExp)
    let Anwser = TIncomes - (Expenditures + Rents + EMIs + OtherExps)
    if (Anwser < 0) {
      setAnswer({ SumAvail: `You Are Spending More than you earn. Start Investing with Us ` })
      setcolor("red")
      setDisplay("")

    }
    else if (Anwser == 0) {
      setAnswer({ SumAvail: "Your Income and Expenditure is same." })
      setcolor("red")
    }
    else if (isNaN(Anwser)) {
      setAnswer({ SumAvail: "Enter all Details" })
      setcolor("white ")
      setDisplay("")

    }
    else {
      setAnswer({ SumAvail: Anwser, message: " That's Great You can start saving with us or start your Investment " })
      setcolor("#white")
        ;
    }
  }

  const onSubmitHandle = () => {
    CalculateSavingsHandle()
    setDisplay("")
  }

  return (
    <div>
      <div>
        <div className='d-flex justify-content-between'>


          <nav className='justify-content-evenly navbar navbar-light navColor ' style={{ fontSize: "1.792vw", width: "100vw" }}>
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
      <div className='bg-dark bg-opacity-50'>
        <nav className='d-flex justify-content-evenly mb-5' style={{ backgroundColor: "#393E46" }}>
          <h1><Link className='text-white text-decoration-none fs-5' to="/LoanCalculator">Loan Calculator</Link></h1>
          <h1><Link className='text-white text-decoration-none fs-5' to="/MortgageCalculator">Mortgage Calculator</Link></h1>
          <h1><Link className='text-white text-decoration-none fs-5' to="/SavingsCalculator">Savings Calculator</Link></h1>
          <h1><Link className='text-white text-decoration-none fs-5' to="/RetirementCalculator">Retirement Calculator</Link></h1>
        </nav>
        <div className="d-flex justify-content-between" style={{ backgroundColor: "#D8D8D8" }}>

          <div className="mt-4 m-5 d-flex  w-50 align-items-center justify-content-center container">
            <h4>
              {" "}
              <span className="text-danger">Calculate</span> How much you can save.
              Save your <span className="text-danger">Savings</span> with Us and Get{" "}
              <span className="text-danger">Great Returns</span>. To check how much
              you can Earn after Maturity use our{" "}{<br></br>}
              <Link to="/SavingsCal" className="text-decoration-none">

                <span className="bi bi-box-arrow-up-right"> </span> Interest Earn
                Calculator
              </Link>
            </h4>
          </div>
          <div className="card w-50 mt-4 m-5 container text-light" style={{ backgroundColor: "#00416D" }}>
            <div className="container">
              <div>
                <h1>Savings Calculator</h1>
                <h4 className="" style={{ display: display, color: Color }}> <span style={{ color: "#FCF876" }}> {Anser.SumAvail}</span>{" "}<span style={{ color: "#fffff" }}> {Anser.message}</span> <span style={{ display: display }}>{ }</span></h4>
              </div>
              <div>
                <dl>
                  <dt className="fs-5 fw-bold  text-light" style={{ color: "#205E61" }}>Total Income <span className="text-danger">*</span></dt>
                  <dd>
                    <input type="text" name="TIncome" onChange={onChangeHandle} value={detals.TIncome} placeholder="" className='fw-bolder' />
                  </dd>
                  <dt className="fs-5 fw-bold text-light " style={{ color: "#205E61" }}>Average Expenditure <span className="text-danger">*</span></dt>
                  <dd>
                    <input type="text" name="Expenditure" onChange={onChangeHandle} value={detals.Expenditure} placeholder="" className='fw-bolder' />
                  </dd>
                  <dt className="fs-5 fw-bold text-light " style={{ color: "#205E61" }}>Rent</dt>
                  <dd>
                    <input type="text" name="Rent" onChange={onChangeHandle} value={detals.Rent} placeholder="if value is 0 please write 0" className='fw-bolder' />
                  </dd>
                  <dt className="fs-5 fw-bold text-light " style={{ color: "#205E61" }}>EMIs</dt>
                  <dd>
                    <input type="text" name="EMI" onChange={onChangeHandle} value={detals.EMI} placeholder="if value is 0 please write 0" className='fw-bolder' />
                  </dd>
                  <dt className="fs-5 fw-bold text-light " style={{ color: "#205E61" }}>Other Expenses</dt>
                  <dd>
                    <input type="text" name="OtherExp" onChange={onChangeHandle} value={detals.OtherExp} placeholder="if value is 0 please write 0" className='fw-bolder' />
                  </dd>

                  <button className='btn btn-outline-success fs-5 ' style={{ color: "#F7FD04" }} onClick={onSubmitHandle}>Calculate</button>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default SavingsCal;
