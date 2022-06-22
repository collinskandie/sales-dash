import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/sidebar";

function ProductsReport() {
  return (
    <Section>
      <Sidebar />
      <Navbar />
      <div className="grid">
        <div className="grid-1">
        //wow!!          
        </div>
        <div className="grid-2">    
        !!Great     
        </div>
      </div>
    </Section>
  );
}

export default ProductsReport;
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
