import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

function UserLogin() {
  
  return (
    <div>
      <div>
        <div>
          <NavigationBar></NavigationBar>
        </div>
      </div>

      {/* ! LOGIN FORMS */}
      <div className="container-xxl d-flex justify-content-evenly mt-5" style={{fontSize:"1.2vw"}}>


      <div className="m-4 border border-1 rounded rounded-4 border-dark p-5 w-50" >
          <div className="card">
            <h1 className="card-header" style={{fontSize:"2.5vw"}}>Register User</h1>
          <div className="card-body">
            <p className="fw-bold mt-3">
              Welcome to People's Bank, Register with us and unlock a world of information and resources to banking world top-notch service to our valued customers            </p>
              <br />
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-light border border-dark mt-1 border-2" >
              <Link to="/OpenAccount" className="text-decoration-none mt-5" style={{fontSize:"1.5vw"}}>Register</Link> 
            </button>
          </div>
          </div>
        </div>

        {/* ? UserLogin Link */}
        <div className="m-4 border border-1 rounded rounded-4 border-dark p-5 w-50">
          <div className="card">
            <h1 className="card-header" style={{fontSize:"2.5vw"}}>User Login</h1>
          <div>
            <p className="fw-bold mt-3 card-body">
              Securely access your account and manage your finances with ease.
              Log in to our online banking platform and experience hassle-free
              banking today! Unleash the new offers and Cashbacks
            </p>
          </div>
          
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-light border border-dark border-2" >
              <Link to="/UserLogins" className="text-decoration-none" style={{fontSize:"1.5vw"}}>Login</Link> 
            </button>
          </div>
          </div>
        </div>

        {/*  Agent Login Link */}
        <div className="m-4 border border-1 rounded rounded-4 border-dark p-5 w-50 card" >
          <div className="card">
            <h1 className="card-header" style={{fontSize:"2.5vw"}}>Agent Login</h1>
          <div>
            <p className="fw-bold mt-3 card-body">
              Welcome back, agent! Log in to access our exclusive agent portal
              and unlock a world of information and resources to assist you in
              providing top-notch service to our valued customers            </p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-light border border-dark mt-1 border-2" >
              <Link to="/AgentLogin" className="text-decoration-none mt-5" style={{fontSize:"1.5vw"}}>Login</Link> 
            </button>
          </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default UserLogin;
