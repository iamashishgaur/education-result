import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LatestJobBoxContainer = styled.div`
  /* width: 100%; */
  height: 220px;

  border: 2px solid red;
  margin-top: 1.5rem;
  /* padding: 0 10rem; */
  display: flex;
  justify-content: center;
  
`;
const LatestJobsBox = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  /* gap: 15px; */
  /* border: 2px solid green; */
  width: 70%;
  /* height: auto; */
  gap: 1px;
`;
const JobBox = styled.div`
  width: 220px;
  height: 80px;
  background-color: red;
  /* border: 3px solid white; */
  display: flex;
 
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  & > span {
    font-size: 2rem;
  }
  & > a {
    font-size: 1.5rem;
    text-decoration: none;
  }
`;
const LatestJobBox = () => {
  return (
    <>
      <LatestJobBoxContainer>
        <LatestJobsBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
          <JobBox>
            <span>Latest Jobs</span>
            <Link to="/">Apply Online</Link>
          </JobBox>
        </LatestJobsBox>
      </LatestJobBoxContainer>
    </>
  );
};

export default LatestJobBox;
