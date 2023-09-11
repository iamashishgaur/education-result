import React from "react";
import LatestJobSlide from "../component/LatestJobSlide";
import Playground from "../component/Playground";
import styled from "styled-components";
import LatestJobBox from "../component/LatestJobBox";
const SocialFllow = styled.div`
margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
const Home = () => {
  return (
    <Playground>
      <LatestJobSlide />
      <SocialFllow>
        <p>
          Let's Connect My Facbook Page :{" "}
          <a href="https://www.facbook.com/eductionresult" target="_blank">
            Click Hear
          </a>
        </p>
      </SocialFllow>
      <LatestJobBox/>
    </Playground>
  );
};

export default Home;
