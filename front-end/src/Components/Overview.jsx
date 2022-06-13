import React from "react";
import styled from "styled-components";
import { AiFillTag } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Overview() {
  return (
    <Section>
      <div className="analytics color1">
        <div className="design">
          <div className="logo">
            <AiFillTag />
          </div>
          <div className="content">
            <h5> Ksh $123,456,789</h5>
          </div>
        </div>
        <div className="total">
          <h6>Total Sales</h6>
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

.color1{
  background-color: #fdf4f5;
  border-radius: 12px;
}
.color2{
  background-color:rgb(0,128,0,0.3);
  border-radius: 12px;
}
.color3{
  background-color:#EEF4FF;
  border-radius: 12px;
}
`;
