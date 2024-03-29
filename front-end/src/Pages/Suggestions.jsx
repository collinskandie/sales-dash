import React from 'react'
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Sidebar from '../Components/sidebar';

function Suggestions() {
    return (
        <Section>
        <Sidebar/>
        <Navbar />
          <div className="grid">
            <div className="grid-1">
              Working        
            </div>
            <div className="grid-2">
              Working perfectly
            </div>
          </div>
        </Section>
      );
    }
    
    export default Suggestions
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
    

