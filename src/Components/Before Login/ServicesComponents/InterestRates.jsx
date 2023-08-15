import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";


function InterestRates() {
  return (
    <div>
    <div>
       <NavigationBar></NavigationBar>
      </div>
      <table className="container-xxl table text-center mt-5 w-50 border border-3 border-dark ">
        <thead className="table-bordered table-active table-group-divider" style={{fontSize:"2.5vw", backgroundColor:"#e4eff9" , color:"#605c56"}}>
          <th>Period</th>
          <th>Interest Rates</th>
        </thead>
        <thead className="table-group-divider">
          <th className="fs-4" style={{color:"#e35134"}}>For General Public</th>
          
        </thead>
        <tbody className="table-group-divider fs-5">
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              7 days to 45 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>3.00%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              46 days to 179 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>4.50%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              180 days to 210 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>5.25%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              211 days to less than 1 year
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>5.75%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              1 Year to less than 2 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>6.80%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              2 years to less than 3 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>7.00%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              3 years to less than 5 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>6.50%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              5 years and up to 10 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>6.50%</td>
          </tr>
        </tbody>
        <thead className="table-group-divider">
          <th className="fs-4 " style={{color:"#e35134"}}>For Senior Citizens</th>
          
        </thead>
        <tbody className="table-group-divider fs-5">
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              7 days to 45 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>3.50%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              46 days to 179 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>5.00%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              180 days to 210 days
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>5.75%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              211 days to less than 1 year
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>6.25%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              1 Year to less than 2 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>7.30%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              2 years to less than 3 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>7.50%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              3 years to less than 5 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>7.00%</td>
          </tr>
          <tr>
            <td className="border-botton" style={{ fontSize: "1.3vw" }}>
              5 years and up to 10 years
            </td>{" "}
            <td style={{ fontSize: "1.3vw" }}>7.50%</td>
          </tr>
        </tbody>
      </table>

      <div className="container-xxl fs-5 mt-5 p-5" style={{backgroundColor:"#605c56", color:"#faf8dc"}}>
        <p>
          Please note that the above interest rates are subject to change. For
          the most up-to-date information and to open an account, we recommend
          visiting your nearest People's Bank branch or contacting our customer
          service representatives. 
          </p>
          <p>
          At People's Bank, we prioritize the security
          and growth of your savings. With our competitive interest rates, you
          can watch your money grow steadily over time. Whether you're saving
          for a future milestone or building an emergency fund, our deposit
          options are designed to meet your financial goals. Start saving with
          People's Bank today and experience the benefits of our attractive
          interest rates!
        </p>
      </div>
      
    </div>
  );
}

export default InterestRates;
