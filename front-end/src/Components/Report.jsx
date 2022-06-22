import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Report() {
  const [data, getData] = useState([]);
  const URL = "/api/SummarySales";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  return (
    <Section>
      <div className="orders">
        <div className="orders_deatails">
          <h4>Active Sales</h4>
        </div>
        <div className="orders-table">
          <table>
            <tbody>
              <tr>
                <th>Invoice</th>
                <th>Month</th>
                <th>Sales person</th>
                <th>Net Sales</th>
                <th>Customer</th>
                <th>Product Class</th>
                <th>Year</th>
                {/* <th>Net Sales</th>
                    <th>Net Sales</th>
                    <th>Net Sales</th> */}
              </tr>
              {data.map((item, Invoice) => (
                <tr key={Invoice}>
                  <td>{item.Invoice}</td>
                  <td>{item.TrnMonth}</td>
                  <td>{item.Salesperson}</td>
                  <td>{item.NetSalesValue}</td>
                  <td>{item.Customer}</td>
                  <td>{item.ProductClass}</td>
                  <td>{item.TrnYear}</td>
                  {/* <td>{item.NetSalesValue}</td>
                        <td>{item.NetSalesValue}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="link.c" className="button">
          See more...
        </a>
      </div>
    </Section>
  );
}
export default Report;
const Section = styled.section`
  .orders {
    color: green;
    width: 100%;
    .orders_deatails {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }
    .orders-table {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      height: 20vh;
      table {
        border-colapse: collapse;
        width: 100%;
        height: 100%;
        display: block;
        overflow-x: auto;
        white-space: nowrap;
        th {
          font-size: 15px;
          text-align: center;
          padding: 5px;
          justify-content: space-evenly;
        }
        td {
          text-align: center;
          padding: 5px;
          justify-content: space-evenly;
        }
      }
    }
  }
  .button {
    text-decoration: none;
    border: none;
    border-radius: 0.5rem;
    ${"" /* padding: 0.4rem 1rem; */}
    cursor: pointer;
    background-color: #eef4ff;
    color: green;
  }
`;
