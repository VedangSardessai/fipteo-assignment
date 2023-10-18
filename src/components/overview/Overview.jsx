import React from "react";
import "./overview.css";
import "../financials/financial.css";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  Label,
  XAxis,
  ResponsiveContainer,
} from "recharts";

export default function Overview() {
  const data = [
    { name: "Segment 1", value: 35, color: "#f1effc", strokeWidth: 24 },
    { name: "Segment 2", value: 50, color: "#5c35ea", strokeWidth: 12 },
    { name: "Segment 3", value: 15, color: "#f53296", strokeWidth: 6 },
  ];

  const salesData = [
    { month: "Jan", sales: 50 },
    { month: "Feb", sales: 45 },
    { month: "Mar", sales: 90 },
    { month: "Apr", sales: 60 },
    { month: "May", sales: 75 },
    { month: "Jun", sales: 40 },
    { month: "Jul", sales: 80 },
    { month: "Aug", sales: 100, color: "#5a32ea" },
    { month: "Sep", sales: 85 },
    { month: "Oct", sales: 65 },
    { month: "Nov", sales: 55 },
    { month: "Dec", sales: 70 },
  ];
  let cumulativeOffset = 0;
  const pieData = data.map((entry) => {
    const offset = cumulativeOffset;
    cumulativeOffset += entry.value / 100;
    return {
      ...entry,
      offset,
    };
  });
  return (
    <div className="overviewContainer">
      <div className="overviewDiv">
        <div>
          <h2 className="overviewHeading">Overview</h2>
          <div className="paraHeadings">
            <div className="monthlyEarningHeading">Monthly Earning</div>
            <div className="quaterlyDropDown">
              Quaterly{" "}
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  transform: "rotate(180deg)",
                  padding: "0 10px 20px 0",
                }}
              >
                ^
              </span>{" "}
            </div>
          </div>
          <div style={{ width: "50vw", height: 250 }} className="barChart">
            <ResponsiveContainer>
              <BarChart
                data={salesData}
                margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
              >
                <XAxis
                  style={{
                    marginTop: "20px",
                  }}
                  dataKey="month"
                  tickLine={null}
                  axisLine={null}
                />

                <Bar radius={10} dataKey="sales" isAnimationActive={false}>
                  {salesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color || "#f2efff"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="customersDiv">
        <div className="piechartHeadings">
          <h2 className="customersHeading">Customers</h2>
          <div className="customersBuy">Customers that buy products</div>
        </div>
        <div className="piechartDiv">
          <div className="label">
            <h3>65%</h3>
            <p>Total new </p>
            <p>Customers</p>
          </div>
          <div className="piechart">
            <ResponsiveContainer width={250} height={400}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                  startAngle={90}
                  endAngle={450}
                  minAngle={1}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="middle">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
