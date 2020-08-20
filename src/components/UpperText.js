import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  width: calc(100% - 40px);
  padding: 25px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  width: 70%;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160.9%;
  color: #41505f;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 20px;
    line-height: 148.9%;
  }
`;

const UpperText = () => {
  return (
    <TextContainer>
      <Text>
        Vi vill genom "<i>Ihop med STF</i> " visa att relationen mellan STF och
        dess medlemmar är viktig för en mer hållbar framtid. Både socialt,
        ekonomiskt och ekologiskt. Att vara medlem i STF kostar mindre än en
        krona om dagen och mycket av det STF erbjuder idag är gratis. Vårt mål
        är att väcka uppmärksamhet hos allmänheten för ett mer hållbart samhälle
        genom gemenskap, äventyr och upplevelser.
      </Text>
    </TextContainer>
  );
};

export default UpperText;
