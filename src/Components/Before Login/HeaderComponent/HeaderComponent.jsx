import React from 'react'
import './HeaderComponent.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import MainBodyComponent from '../BodyComponent/MainBodyComponent'
import CareersHomes from '../Careers/CareersHomes'
import CalculatorComponent from '../CalculatorComponent/CalculatorComponent'
import EmiCalculator from "../ServicesComponents/EmiCalculator";
import InterestRates from "../ServicesComponents/InterestRates";
import LocateBranch from "../ServicesComponents/LocateBranch";
import MutualFunds from "../ServicesComponents/MutualFunds";
import AboutUs from '../AboutUs/AboutUs'
import UserLogin from '../UserLogin/UserLogin'
import ContactUs from '../ContactUS/ContactUs'
import LoanCalculator from '../CalculatorComponent/LoanCalculator'
import { OpenAccs } from '../ServicesComponents/OpenAccs'
import MortgageCal from '../CalculatorComponent/MortgageCal'
import SavingsCal from '../CalculatorComponent/SavingsCal'
import RetirementCal from '../CalculatorComponent/RetirementCal'
import BudgetCal from '../CalculatorComponent/BudgetCal'
import FooterComponent from '../FooterComponent/FooterComponent'
import AgentLogin from '../AgentLoginRegister/AgentLogin'
import { AgentRegister } from '../AgentLoginRegister/AgentRegister'
import UserLogins from '../UserLogin/UserLogins'
import AgentAddCustomer from '../AgentLoginRegister/AgentAddCustomer'
import Statement from '../../After Login/Statement/Statement'
import AccountSumary from '../../After Login/Account Summary/AccountSumary'
import MobileRecharge from '../../After Login/Bill Payments/MobileRecharge'
import Satelite from '../../After Login/Bill Payments/Satelite'
import Faucet from '../../After Login/Bill Payments/Faucet'
import Life from '../../After Login/Bill Payments/Life'
import Barrier from '../../After Login/Bill Payments/Barrier'
import Car from '../../After Login/Bill Payments/Car'
import Help from '../../After Login/Help/Help'
import AccountManagement from '../../After Login/AccountManagement/AccountManagement'
import OtherAccounts from '../../After Login/OtherAccounts/OtherAccounts'
import AfterloginHome from '../../After Login/LoginHome/AfterloginHome'
import TransferFunds from '../../After Login/Transfer Funds/TransferFunds'
import BillPay from '../../After Login/BillPayment/BillPay'
import ContactForm from '../../After Login/ContactUS/ContactUS'
import JobPosting from '../../BankSide/JobPosting'
import AllJobs from '../../BankSide/AllJobs'
import PosterProfile from '../../BankSide/PosterProfile'
import PosterLogin from '../../BankSide/Job Register and Login/PosterLogin'
import PosterRegister from '../../BankSide/Job Register and Login/PosterRegister'


function HeaderComponent() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Landing page Nav Navigation  */}
                <Route path='/' element={<MainBodyComponent></MainBodyComponent>}></Route>
                <Route path='Home' element={<MainBodyComponent></MainBodyComponent>}></Route>
                <Route path='Careers' element={<CareersHomes></CareersHomes>}></Route>
                <Route path='Calculator' element={<CalculatorComponent></CalculatorComponent>}></Route>
                <Route path='ContactUs' element={<ContactUs></ContactUs>}></Route>
                <Route path='AboutUs' element={<AboutUs></AboutUs>}></Route>
                <Route path='UserLogin' element={<UserLogin></UserLogin>}></Route>
                <Route path='UserLogins' element={<UserLogins></UserLogins>}></Route>
                
                {/* Agent route */}
                <Route path="/AgentLogin" element={<AgentLogin></AgentLogin>}></Route>
                <Route path="/AgentRegister" element={<AgentRegister></AgentRegister>}></Route>
                <Route path="/AgentLoginAddDetails" element={<AgentAddCustomer></AgentAddCustomer>}></Route>
                
                {/* Navigation Calculator Compnents and path */}
                <Route path='LoanCalculator' element={<LoanCalculator></LoanCalculator>}></Route>
                <Route path='MortgageCalculator' element={<MortgageCal></MortgageCal>}></Route>
                <Route path='SavingsCalculator' element={<SavingsCal></SavingsCal>}></Route>
                <Route path='RetirementCalculator' element={<RetirementCal></RetirementCal>}></Route>
                <Route path='BudgetCalculator' element={<BudgetCal></BudgetCal>}></Route>
                <Route path='CurrencyCalculator' element={<BudgetCal></BudgetCal>}></Route>
                <Route path='InvestmentCalculator' element={<BudgetCal></BudgetCal>}></Route>
                
                {/* Landing page Services routes and Components */}
                <Route path="OpenAccount" element={<OpenAccs></OpenAccs>}></Route>
                <Route path="EMICalculator" element={<EmiCalculator></EmiCalculator>}></Route>
                <Route path="InterestRates" element={<InterestRates></InterestRates>}></Route>
                <Route path="LocateBranch" element={<LocateBranch></LocateBranch>}></Route>
                <Route path="MutualFunds" element={<MutualFunds></MutualFunds>}></Route>
                
                {/* After Login Routes and Components */}
                <Route path="/registercustomer" component={OpenAccs}></Route>
                <Route path="LoginHome/:UserID" element={<AfterloginHome></AfterloginHome>}></Route>
                <Route path="TransferFunds/:UserID" element={<TransferFunds></TransferFunds>}></Route>
                <Route path="AccountSummary/:UserID" element={<AccountSumary></AccountSumary>}></Route>
                <Route path="BillPay/:UserID" element={<BillPay></BillPay>}></Route>
                <Route path="otherAccounts/:UserID" element={<OtherAccounts></OtherAccounts>}></Route>
                <Route path="Statement/:UserID" element={<Statement></Statement>}></Route>
                <Route path="Help/:UserID" element={<Help></Help>}></Route>
                <Route path="AccountManagement/:UserID" element={<AccountManagement></AccountManagement>}></Route>
                <Route path="ContactUs/:UserID" element={<ContactForm></ContactForm>}></Route>
                {/*  Bill Payments */}
                <Route path='/mobile/:UserID' element={<MobileRecharge></MobileRecharge>}/>
                <Route path='/satelite/:UserID' element={<Satelite></Satelite>}/>
                <Route path='/faucet/:UserID' element={<Faucet></Faucet>}/>
                <Route path='/life/:UserID' element={<Life></Life>}/>
                <Route path='/barrier/:UserID' element={<Barrier></Barrier>}/>
                <Route path='/car/:UserID' element={<Car></Car>}/>


                {/* Job Posting Routes */}
                <Route path='/JobPosterLogin' element={<PosterLogin></PosterLogin>}></Route>
                <Route path='/JobPosterRegister' element={<PosterRegister></PosterRegister>} />
                <Route path='/JobPoster/:PosterID' element={<JobPosting></JobPosting>}></Route>
                <Route path='/AllJobs/:PosterID' element={<AllJobs></AllJobs>}></Route>
                <Route path='/JobPosterProfile/:PosterID' element={<PosterProfile></PosterProfile>}></Route>
                
                
                
            </Routes>
            <FooterComponent></FooterComponent>
        </BrowserRouter>

    )
}

export default HeaderComponent


