import React, { useState } from "react";
import "./dashboard.css";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BiCubeAlt,
  BiHelpCircle,
  BiUser,
  BiMoney,
  BiSolidCoupon,
} from "react-icons/bi";
import { TbHexagonNumber0 } from "react-icons/tb";

export default function Dashboard() {
  const [active, setActive] = useState("dashboard"); // Set initial active state

  return (
    <>
      <div className="dashboardList">
        <h1 className="dashboardHeader">
          <TbHexagonNumber0
            style={{
              marginRight: "10px",
            }}
          />{" "}
          Dashboard
        </h1>

        <div className="dashboardLinks">
          <span
            onClick={() => setActive("dashboard")}
            className={`dashboardLink ${active === "dashboard" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <AiOutlineDashboard size={25} />
            </span>
            Dashboard
            <p>{">"}</p>
          </span>

          <span
            onClick={() => setActive("product")}
            className={`dashboardLink ${active === "product" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <BiCubeAlt size={25} />
            </span>
            Product
          </span>

          <span
            onClick={() => setActive("customers")}
            className={`dashboardLink ${active === "customers" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <BiUser size={25} />
            </span>
            Customers
          </span>

          <span
            onClick={() => setActive("income")}
            className={`dashboardLink ${active === "income" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <BiMoney size={25} />
            </span>
            Income
          </span>

          <span
            onClick={() => setActive("promote")}
            className={`dashboardLink ${active === "promote" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <BiSolidCoupon size={25} />
            </span>
            Promote
          </span>

          <span
            onClick={() => setActive("help")}
            className={`dashboardLink ${active === "help" ? "active" : ""}`}
          >
            <span className="dashboardIcons">
              <BiHelpCircle size={25} />
            </span>
            Help
          </span>
        </div>
      </div>
    </>
  );
}
