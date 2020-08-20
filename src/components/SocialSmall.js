import React from "react";
import styled from "styled-components";
import one from "../img/Instagram Post - 22.png";
import two from "../img/Instagram Post - 23.png";
import three from "../img/Instagram Post - 24.png";
import four from "../img/Instagram Post - 25.png";

const Container = styled.div`
  margin-top: 20px;
  background-color: #41505f;
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-left: var(--side--margins);
  margin-right: var(--side--margins);
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  margin: 20px 0px;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    margin: 10px 0px 10px 0px;
  }
`;

const SocialSmall = () => {
  return (
    <Container>
      <Img src={one} />
      <Img src={two} />
      <Img src={three} />
      <Img src={four} />
    </Container>
  );
};

export default SocialSmall;
