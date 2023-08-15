import React from "react";
import "./BodyComponent.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

function BodyComponent() {
  return (
    <div>
      <div>
        <NavigationBar></NavigationBar>
      </div>


      <div className="container bodyHeight">
        <div className="h-auto">
          <div className="d-flex justify-content-between">
            <div className="me-5 card h-75">
              <div className="">
                <h1 className="card-header" style={{ backgroundColor: "#3A98B9", fontSize: "2vw" }}> Updates And Informations </h1>
                <div className="container" >
                  <p className=" p-2" style={{ fontSize: "1.5vw" }} >
                    - Our bank has implemented advanced security measures to
                    protect your accounts and personal information. <br />
                    - We now offer a mobile app with easy-to-use features for
                    managing your accounts on-the-go. <br />
                    - Our customer service team has expanded its hours to provide
                    support whenever you need it. <br />
                    - We have increased the number of ATMs in our network for your
                    convenience. <br />
                    - Our bank has lowered interest rates on loans for qualifying
                    customers. <br />
                    - We have launched a new rewards program for debit and credit
                    card users. <br />
                    - Our online banking platform has been updated to provide a
                    more seamless experience. <br />
                    - We have added new investment options to help you grow your
                    wealth. <br />
                    - Our bank has partnered with additional merchants to offer
                    exclusive discounts and deals to our customers. <br />- We now
                    offer overdraft protection to help you avoid costly fees.
                  </p>
                </div>
              </div>
            </div>
            <div className=" card mb-5">
              <div>
                <h1 className="card-header" style={{ backgroundColor: "#3A98B9", fontSize: "2vw" }}>Services</h1>
              </div>
              <div>
                <p className="ms-4 " style={{ fontSize: "1.2vw", padding: ".6vw" }}><Link to="/OpenAccount" className="text-dark text-decoration-underline">Open Account</Link> </p>
                <p className="ms-4 " style={{ fontSize: "1.2vw", padding: ".6vw" }}><Link to="/EMICalculator" className="text-dark text-decoration-underline">EMI Calculator</Link> </p>
                <p className="ms-4 " style={{ fontSize: "1.2vw", padding: ".6vw" }}><Link to="/InterestRates" className="text-dark text-decoration-underline">Interest Rates</Link> </p>
                <p className="ms-4 " style={{ fontSize: "1.2vw", padding: ".6vw" }}><Link to="/LocateBranch" className="text-dark text-decoration-underline">Locate Branch</Link> </p>
                <p className="ms-4 " style={{ fontSize: "1.2vw", padding: ".6vw" }}><Link to="/MutualFunds" className="text-dark text-decoration-underline">Mutual Funds</Link> </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>




  );
}

export default BodyComponent;
