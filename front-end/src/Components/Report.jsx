import React from "react";
import styled from "styled-components";

function Report() {
  return (
    <Section>
      <div className="orders">
        <div className="orders_deatails">
          <div>
            <h4>Active Orders</h4>
          </div>         
        </div>
      </div>
      <div className="orders-table">
        <table>
          <tr>
            <th>Tracking Id</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Apple Watch</td>
            <td>June 14, 2020</td>
            <td>Ksh 3400</td>
            <td><button>Complete</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Apple Watch</td>
            <td>June 14, 2020</td>
            <td>Ksh 3400</td>
            <td><button>Complete</button></td>
          </tr>          
        </table>
        </div>
      <a href="link.c"className="button">See more...</a>
    </Section>
  );
}

export default Report;
const Section = styled.section`
  .orders {
    color:black;
    width: 100%;
    .orders_deatails {
      display:flex;
      justify-content: space-between;
      margin: 1rem 0;
      div{
        display: flex;
        gap: 1rem;
        button {
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: white;
          color: green;
          font-weight: bold;
        }
      }
    }
    .orders-table {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      table{
        border-colapse: collapse;
        width: 100%;
        th,td{
          text-align: center;
          padding: 5px;
          justify-content: space-evenly;
          button{
            border-radius: 0.3rem;
            padding: 0.4rem 1rem;
            border:none;
            cursor:pointer;
            background-color: green;
            color: white;
          }

        }  
      }
    }
  }
  .button {
        text-decoration: none;
        border: none;
        border-radius: 0.5rem;
        ${'' /* padding: 0.4rem 1rem; */}
        cursor: pointer;
        background-color: #eef4ff;
        color: green;
      }
`;
