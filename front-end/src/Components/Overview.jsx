import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiFillAmazonCircle,
  AiFillTag,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";

function Overview() {
  const [yearData, setyearData] = useState(null);
  const [monthData, setmonthData] = useState(null);
  const URL1 = "/api/yearTotal";
  const URL2 = "/api/monthTotal";
  //const URL3 = "/api/yearTotal";
  useEffect(() => {
    loadData();
    loadData2();
  }, []);
  const loadData = async () => {
    try {
      fetch(URL1)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setyearData(response);
      });
    } catch (error) {
      console.log("load period", error);
    }
  };
  const loadData2 = async () => {
    try {
      fetch(URL2)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setmonthData(response);
      });
    } catch (error) {
      console.log("load period", error);
    }
  };
  return (
    <Section>
      <div className="analytics color1">
        <div className="design">
          <div className="logo">
            <AiFillTag />
          </div>
          <div className="content">
            {/* //Custom data */}
            {/* {yearData.map((v) => (
              <h5> {v.totalsales}</h5> 
               ))} */}
            
          </div>
        </div>
        <div className="total">
          <h6>Year total sales</h6>
          <span className="t1">+18%</span>
          <AiOutlineArrowUp className="svg1" />
        </div>
      </div>
      <div className="analytics color2">
        <div className="design">
          <div className="logo">
            <AiFillExperiment />
          </div>
          <div className="content">
            {/* //Custom data */}
            {/* <h5> {monthData}</h5> */}
          </div>
        </div>
        <div className="total">
          <h6>Month Sales</h6>
          <span className="t1">+18%</span>
          <AiOutlineArrowUp className="svg1" />
        </div>
      </div>
      <div className="analytics color3">
        <div className="design">
          <div className="logo">
            <AiFillAmazonCircle />
          </div>
          <div className="content">
            <h5> Ksh $123,456,789</h5>
          </div>
        </div>
        <div className="total">
          <h6>Total Sales</h6>
          <span className="t1">+18%</span>
          <AiOutlineArrowUp className="svg2" />
        </div>
      </div>
    </Section>
  );
}

export default Overview;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 1rem;

  .color1 {
    background-color: #fdf4f5;
  }
  .color2 {
    background-color: rgb(0, 128, 0, 0.3);
  }
  .color3 {
    background-color: #eef4ff;
  }
  .analytics {
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 1rem;
    color: green;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #d4eoff;
      color: green;
      svg {
        color: green;
      }
    }
    .design {
      display: flex;
      align-items: center;
      gap: 1rem;
      .logo {
        background-color: #fdf4f5;
        border-radius: 1rem;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        svg {
          font-size: 2rem;
        }
      }
    }
    .total {
      display: flex;
      align-itmes: center;
      gap: 1rem;
      justify-content: space-evenly;
      margin-top: 20px;
      .svg1 {
        color: green;
      }
      .svg2 {
        color: red;
      }
      .t1 {
        color: green;
      }
    }
    .t2 {
      color: red;
    }
  }
`;
