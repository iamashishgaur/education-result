// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  z-index: 9;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const Header = styled.div`
  /* padding: 0 5rem; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.ul`
  font-weight: 600;
  text-transform: uppercase;
  & > ul {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    & > a {
      text-decoration: none;
      letter-spacing: 0.5px;
      color: black;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Header>
          <NavMenu>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/latestjob">Latest Jobs</Link>
              <Link to="/result">Results</Link>
              <Link to="/admitcard">Admit Card</Link>
              <Link to="/answerkey">Answer Key</Link>
              <Link to="/syllabus">Syllabus</Link>
              <Link to="/addmission">Addmission</Link>
              <Link to="/certificate">Certificate</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </NavMenu>
        </Header>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
