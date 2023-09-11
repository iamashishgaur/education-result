import React from "react";
import styled from "styled-components";
const PlayGroundcontainer = styled.div`
  
`;
const Playground = (props) => {
  return (
    <>
      <PlayGroundcontainer>{props.children}</PlayGroundcontainer>
    </>
  );
};

export default Playground;
