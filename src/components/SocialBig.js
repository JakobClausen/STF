import React from "react";
import styled from "styled-components";
import leftImg from "../img/fb.mockup.png";
import rightImg from "../img/inst.mockup.png";

const Container = styled.div`
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  gap: 20px;
  margin-left: var(--side--margins);
  margin-right: var(--side--margins);
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Item = styled.img`
  width: 100%;
`;

const SocialBig = () => {
  return (
    <Container>
      <Item src={leftImg}></Item>
      <Item src={rightImg}></Item>
    </Container>
  );
};

export default SocialBig;
