import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <div className='navColor'>
            <div className='d-flex justify-content-between '>


                    <div className='navColor pt-4 ' >
                        <img src="LogoTrans.png" className='m-3 ' style={{ width: "25vw" }} alt="" />
                    </div>
                <nav className='justify-content-evenly d-flex align-items-center  ' style={{ fontSize: "1.3vw", width: "100vw", }}>

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
    )
}

export default NavigationBar