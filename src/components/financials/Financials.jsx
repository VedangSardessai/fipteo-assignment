import React from "react";
import "./financial.css";
import earnings from "../../assets/earnings.png";
import orders from "../../assets/orders.png";
import balance from "../../assets/balance.png";
import sales from "../../assets/totalSale.png";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
export default function Financials() {
  const red = {
    color: "#d62765",
    fontWeight: "bold",
  };
  const green = {
    color: "#18b35e",
    fontWeight: "bold",
  };
  return (
    <div className="financialsDiv">
      <div className="financeContainer">
        <div className="left">
          <img className="financialsImg" src={earnings} alt="" />
        </div>
        <div className="right">
          <div className="heading">Earning</div>
          <div className="dollarEarnings">$198k</div>
          <div className="growth">
            <span style={green}>
              <AiOutlineArrowUp />
              37.8%
            </span>{" "}
            this month
          </div>
        </div>
      </div>
      <div className="financeContainer">
        <div className="left">
          <img className="financialsImg" src={orders} alt="" />
        </div>
        <div className="right">
          <div className="heading">Orders</div>
          <div className="dollarEarnings">$2.4k</div>
          <div className="growth">
            <span style={red}>
              {" "}
              <AiOutlineArrowDown />
              2%
            </span>{" "}
            this month
          </div>
        </div>
      </div>
      <div className="financeContainer">
        <div className="left">
          <img className="financialsImg" src={balance} alt="" />
        </div>
        <div className="right">
          <div className="heading">Balance</div>
          <div className="dollarEarnings">$2.4k</div>
          <div className="growth">
            <span style={red}>
              {" "}
              <AiOutlineArrowDown /> 2%
            </span>{" "}
            this month
          </div>
        </div>
      </div>
      <div className="financeContainer">
        <div className="left">
          <img className="financialsImg" src={sales} alt="" />
        </div>
        <div className="right">
          <div className="heading">Total Sales</div>
          <div className="dollarEarnings">$89k</div>
          <div className="growth">
            <span style={green}>
              {" "}
              <AiOutlineArrowUp />
              11%
            </span>{" "}
            this week
          </div>
        </div>
      </div>
    </div>
  );
}
