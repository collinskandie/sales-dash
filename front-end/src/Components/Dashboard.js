import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Report from "../Components/Report";
import Overview from "../Components/Overview";
import Sales from "../Components/Sales";
import Messages from "../Components/Messages";
import Analytics from "./Analytics";
import Shopping from "./Shopping";

function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="grid-1">
          <Overview />
          <Sales /> 
          <Report />         
        </div>
        <div className="grid-2">
          <Analytics/>
          <Messages />
          <Shopping/>
        </div>
      </div>
    </Section>
  );
}

export default Dashboard;
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

