import React, { useState } from "react";
import "./dashboard.css";
import { AiOutlineDashboard, AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";
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
  const [isDashboardOpen, setIsDashboardOpen] = useState(
    window.innerWidth > 1200
  );

  const handleResize = () => {
    setIsDashboardOpen(window.innerWidth < 1200);
  };

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="dashboardContainer">
        {window.innerWidth < 1200 && (
          <button
            style={{
              color: !isDashboardOpen ? "white" : "black",
            }}
            className={`menuButton ${isDashboardOpen ? "" : "closed"}`}
            onClick={toggleDashboard}
          >
            <AiOutlineMenu size={25} />
          </button>
        )}
        <div className={`dashboardList ${isDashboardOpen ? "" : "closed"}`}>
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
              className={`dashboardLink ${
                active === "dashboard" ? "active" : ""
              }`}
            >
              <span className="dashboardIcons">
                <AiOutlineDashboard size={25} />
              </span>
              Dashboard
              <p>{">"}</p>
            </span>

            <span
              onClick={() => setActive("product")}
              className={`dashboardLink ${
                active === "product" ? "active" : ""
              }`}
            >
              <span className="dashboardIcons">
                <BiCubeAlt size={25} />
              </span>
              Product
            </span>

            <span
              onClick={() => setActive("customers")}
              className={`dashboardLink ${
                active === "customers" ? "active" : ""
              }`}
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
              className={`dashboardLink ${
                active === "promote" ? "active" : ""
              }`}
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

          <div className="projectManagerContainer">
            <div className="leftImg">
              <img
                className="profileImg"
                src="https://images.generated.photos/nc6EQtgDd5fbqGBb6QN7TqZVmX1x40hA7o-aqmDtmUo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY0MDg3LmpwZw.jpg"
                alt=""
              />
            </div>
            <div className="rightContent">
              <div
                style={{
                  fontSize: "22px",
                }}
                className=""
              >
                Evano
              </div>
              <div
                style={{
                  fontSize: "14px",
                }}
                className=""
              >
                Project Manager{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
