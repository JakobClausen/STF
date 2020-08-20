import React from "react";
import styled from "styled-components";
import wave from "../img/Vector 1.svg";
import logo from "../img/stf_logo_150mm150dpi 2 1.svg";

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  position: relative;
`;

const Wave = styled.img`
  width: 100%;
`;
const Logo = styled.img`
  position: absolute;
  top: 35%;
  left: 1.5%;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wave src={wave} />
      <Logo src={logo} />
    </Container>
  );
};

export default Footer;
