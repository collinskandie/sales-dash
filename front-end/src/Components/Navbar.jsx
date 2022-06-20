import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import AvatarImg from "../assest/webApp.png";
//import Appleimg from "../assest/apple.png";

function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="notifications">
        <div className="date">
          <BsFillCalendarDateFill />
          <span>June 13, 2022</span>
        </div>
        <div className="icons">
          <BiSearchAlt />
          <span>|</span>
          <BsBell />
          <span>|</span>
          <div className="image">
            <img src={AvatarImg} alt=""/>
          </div>
          <AiFillCaretDown/>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      margin-left: 0.5rem;
      color: black;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
  .notifications{
    display: flex;
    align-items: center;
    ${'' /* margin-top: -10px; */}
    .date{
      background-color: rgb(0,128,128,0.2);
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 1rem;
      svg{
        color: green;
      }
      span{
        color: black;
      }
    }
    .icons{
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      svg{
        color:green;

      }
      span{
        color: green;        
      }
      .image{
        display: flex;
        gap: 1rem;
        img{
          height: 2rem;
          width: 2rem;
          border-radius:3rem;
        }
      }
    }
  }
`;
