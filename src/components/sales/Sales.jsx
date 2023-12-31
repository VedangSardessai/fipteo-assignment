import React from "react";
import "./sales.css";
import { BsSearch } from "react-icons/bs";
import SalesTable from "./SalesTable";
export default function Sales() {
  return (
    <div className="salesContainer">
      <div style={{
        height:'35px'
      }}>
        <h2 className="salesHeader">Product sell</h2>
        <div className="paraHeadings">
          <div className="salesSearchAndQuaterly">
            <div className="salesSearchBar">
              <BsSearch className="salesSearchIcon" />
              <input
                placeholder="Search"
                className="salesSearch"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="lastdays">
              Last 30 days{" "}
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  transform: "rotate(180deg)",
                  marginLeft: "5px", // Add margin to adjust the spacing
                }}
              >
                ^
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <SalesTable />
    </div>
  );
}
