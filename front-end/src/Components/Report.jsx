import React, {useState, useEffect} from "react";
import styled from "styled-components";
import data from '../assest/d.json'



function Report() { 
  return (
    <Section>
      <div className="orders">
        <div className="orders_deatails">          
            <h4>Active Orders</h4>                   
        </div>
      <div className="orders-table">
        {/* {
          Object.entries(data,index).map(item=>{
            console.log(item[1].Invoice);
          })
        } */}
       
        </div>
      <a href="link.c"className="button">See more...</a>
    
    </div></Section>
  );
}
export default Report;
const Section = styled.section`
  .orders {
    color:green;
    width: 100%;
    .orders_deatails {
      display:flex;
      justify-content: space-between;
      margin: 1rem 0;      
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
