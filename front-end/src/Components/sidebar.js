import React, { useState} from "react";
import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { FaSalesforce } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { SiAccusoft } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import syspro from '../assest/syspro.png'

function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <Section>
      <div className="top">
        <div className="brand">
        <img className="svg" src={syspro} alt="syspro logo"/>
          {/* <AiFillCodeSandboxCircle /> */}
          <span>Syspro Dash</span>
        </div>
        <div className="links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="index.js">
                <AiFillDashboard />
                <span className="border">Dashboard</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="sales.vh">
                <FcSalesPerformance />
                <span className="border">Sales</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="Reports.com">
                <FaSalesforce />
                <span className="border">Customized Reports</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="Profit.nk">
                <GiProfit />
                <span className="border">Profit</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="Messages.vj">
                <SiGooglemessages />
                <span className="border">Messages</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="overview.ck">
                <GrOverview />
                <span className="border">Overview</span>
              </a>
            </li>
            <li
              className={currentLink === 7 ? "active" : "none"}
              onClick={() => setCurrentLink(7)}
            >
              <a href="suggestions.ck">
                <SiAccusoft />
                <span className="border">Suggestions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logout">
        <a href="logout.ck">
          <AiOutlineLogout />
          <span>Logout</span>
        </a>
      </div>
    </Section>
  );
}

export default Sidebar;
const Section = styled.div`
  position: fixed;
  left: 0;
  background-color: rgb(0,128,0,0.2);
  height: 100vh;
  width: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.3rem 0;
      .svg {
        width: 30px;
        height: 30px;
        color: green;
        font-size: 3rem;
        border-radius: 50%;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: green;
        text-align: center;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 2rem;
          border-radius: 0.2rem;
          &:hover {
            background-color: green;
            a {
              color: white;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: grey;
            svg {
              font-size: 1.4rem;
            }
            span {
              display: flex;
              gap: 2rem;
            }
          }
        }
        .active {
          background-color: green;
          a {
            color: white;
          }
        }
      }
    }
  }
  .logout{
      padding: 0.6rem 3rem;
      margin-left: -2rem;
      a{
          text-decoration: none;
          display: flex;
          align-content: center;
          justify-content: center;
          color: black;
          gap: 1rem;
          svg{
              font-size: 1.4rem;              
          }
          span{
              display: flex;

          }

      }
  }
`;
