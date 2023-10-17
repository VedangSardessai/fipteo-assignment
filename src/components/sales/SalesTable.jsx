import React from "react";
import "./table.css";
export default function SalesTable() {
  const tableData = [
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem ipsum",
      description: "amet consectetur adipisicing elit. ",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum ",
      description: "Iure nisi similique facere ",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "Earum iste officiis vitae aut quia",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "nihil odit hic ",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "blanditiis, error recusandae",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "quis voluptate",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "maxime asperiores",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      img: "https://picsum.photos/300/250",
      name: "Lorem Ipsum",
      description: "blanditiis aliquid ",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "20",
    },
  ];
  return (
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>
                <div class="product-info">
                  <img src={data.img} alt={data.name} class="pdtimg" />
                  <div class="text-info">
                    <p class="product-name">{data.name}</p>
                    <p class="product-description">{data.description}</p>
                  </div>
                </div>
              </td>
              <td>{data.stock}</td>
              <td>
                <b>{data.price}</b>
              </td>
              <td>{data.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
