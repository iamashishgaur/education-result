import React from "react";
import styled from "styled-components";
const LatestJobsSlidecontainer = styled.div`
  display: flex;
  justify-content: center;
  // width: 100%;
  height: 200px;
  border: 2px solid red;
`;
const LatestUpdate = styled.div`
width: 60%;
border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  & > fieldset {
    justify-content: center;
  }
`;
const LatestJobSlide = () => {
  return (
    <>
      <LatestJobsSlidecontainer>
        <LatestUpdate></LatestUpdate>
      </LatestJobsSlidecontainer>
    </>
  );
};

export default LatestJobSlide;
