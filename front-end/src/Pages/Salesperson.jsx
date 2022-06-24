import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Components/sidebar";
import Navbar from "../Components/Navbar";
function Salesperson() {
  const [data, setData] = useState(null);
  const URL = "/api/salesperson1";
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    } catch (error) {
      console.log("load period", error);
    }
  }; 
  return (
    <Section>
      <Sidebar />
      <Navbar />
      <div className="grid">
        <div className="grid-1">
          <form>
            <p>Search</p>
            <input type="text" />
            {"  "}
            <button>Update</button>
          </form>
          <label>Name:{data.Name}</label>
          <label>Total Sales:{data.Sales} </label>
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
  }
`;
