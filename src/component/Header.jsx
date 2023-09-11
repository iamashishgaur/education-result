import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/image/er.PNG";
const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  align-items: center;
  background-color: aliceblue;
`;
const HeaderLeft = styled.div``;
const HeaderTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;
const HeaderRight = styled.div``;
const NavLogo = styled.div`
 
  cursor: pointer;
  &>img{
    width: 120px;
  height: 100px;
  border-radius: 10%;
  }
`;
const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <NavLogo onClick={() => nav("/")}>
            <img src={logo} alt="logo" />
          </NavLogo>
        </HeaderLeft>
        <HeaderRight>
          <HeaderTitle onClick={() => nav("/")}>
            EducationResult.com
          </HeaderTitle>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
};

export default Header;
