import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Components/sidebar";
import Navbar from "../Components/Navbar";
function Salesperson() {
  const [userId, setUserid] = useState('');
  const URL = "/api/salesperson1/";
  useEffect(() => {
    // loadData();
  }, []);
  function handleSubmit (e) {
    e.preventDefault();
    const userDetails= { userId };
    fetch(URL, {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify(userDetails) 
    })
   
  } 
  const search =()=>{
    //function to send request to apis

  }
  return (
    <Section>
      <Sidebar />
      <Navbar />
      <div className="grid">
        <div className="grid-1">
          <form onSubmit={e => {handleSubmit(e)}}>
            <h3>Search</h3>
            <input type="text" placeholder="User ID" onChange={e => setUserid(e.target.value)}/>
            {"  "}
            <input type="submit" value="Submit" />
          </form>
          <lable>User:{userId}</lable>
          <label>Name:</label>
          <label>Total Sales: </label>
          <div>
          </div>
        </div>
        <div className="grid-2">orders_deatails</div>
      </div>
    </Section>
  );
}

export default Salesperson;
const Section = styled.section`
  margin-left: 36vh;
  height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid-1 {
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .grid-2 {
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }fgbhkfhgfgkkhfgh
`;
