import React from "react";
import styled from "styled-components";
import print from "../img/inst.mockup.png";

const Container = styled.div`
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 20px));
  gap: 20px;
  margin-top: 20px;
  margin-left: var(--side--margins);
  margin-right: var(--side--margins);
`;

const Print = styled.img`
  width: calc(100% - var(--side--margins));
`;
const Text = styled.p`
  width: calc(100% - var(--side--margins));
  margin: 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const PrintSection = () => {
  return (
    <Container>
      <Print src={print} />
      <Text>
        Genom att lansera en kampanj där vi lägger stort fokus på att lyfta
        gemenskapen inom STF. Detta kommer vi att göra genom att presentera
        slagkraft content på diverse digitala plattformar med vår hashtag
        <Bold>#ihopmedSTF.</Bold>
        <br />
        <br />
        Syftet med kampanjen är att värva nya medlemmar till STF och hålla kvar
        de gamla genom ökad gemenskap. På vederbörande bilder kommer vår slogan
        “Vill du bli ihop med oss?” fungera som en eye opener.
        <br />
        <br />
        Vår idé är att lansera en kampanj där vi kommer lägga ett stort fokus på
        att lyfta gemenskapen som STF erbjuder sina medlemmar. Detta kommer vi
        att göra genom att presentera slagkraftiga bilder/film på diverse
        digitala plattformar med vår hashtag xx som kommer få en viral spridning
        genom sociala medier. Vårt syfte med denna kampanj är att göra STF mer
        synlig och på så vis öka kännedomen om föreningens existens. det viktiga
        är inte den enskilde individen utan gemenskapen
      </Text>
    </Container>
  );
};

export default PrintSection;
