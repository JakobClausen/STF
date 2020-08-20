import React from "react";
import styled from "styled-components";
import print from "../img/Grupp06_sammanslaget2020_helsida.png";

const Container = styled.div`
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 20px));
  gap: 20px;
  margin-top: 40px;
  margin-left: var(--side--margins);
  margin-right: var(--side--margins);
  @media (max-width: 768px) {
    grid-template-columns: calc(100% - 40px);
    width: 100%;
  }
`;

const Print = styled.img`
  width: 100%;
`;
const TextContainer = styled.p`
  width: 100%;
  margin: 0;
  color: var(--text--color);
`;

const Header = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 148.9%;
  border-bottom: 2px solid #e6b450;
`;
const Text = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 148.9%;
`;

const PrintSection = () => {
  return (
    <Container>
      <Print src={print} />
      <TextContainer>
        <Header>Bli ihop med STF</Header>
        <br />
        <br />
        <Text>
          Vi lanserar nu kampanjen "<i>Bli ihop med STF</i>" för att engagera
          människor som är obekanta med STF att bli tillsammans med oss genom
          ett medlemskap. Vi tror på att genom att odla en personlig relation
          till våra medlemmar så kommer vi att motivera dem till att värna om
          organisationen och att hjälpa oss att ta hand om naturen i enlighet
          med STFs värderingar. Vi hoppas på att redan befintliga medlemmar
          motiveras till att välkomna nya medlemmar med en öppen famn.
          <br />
          <br />
          Vi planerar att lanserar slagkraftiga annonser i digitala kanaler som
          påminner om ungdomstiden när fråga chans lappar skickades runt i hopp
          om att få inleda en ny relation. Vi ställer frågan vill du bli ihop
          med oss? och använder oss utav hashtagen #ihopmedstf för att skapa en
          sammanförande och inbjudande rörelse.
          <br />
          <br />
          Vi hoppas föra in fler i gemenskapen genom att trycka på de personliga
          relationer och omhändertagande viljorna som redan existerar inne i
          organisationen.Vi förstår att STFs medlemmar uppskattar den känsla av
          meningsfullhet som de får av att kunna bidra till det STF gör. Vi tror
          på att vi är starkare tillsammans och därför vill vi genom kampanjen
          verka för att inkludera de som inte annars vistas i naturområden. Vi
          hoppas kunna engagera människor som upplever sig stressade, uttråkade
          och i behov av nya äventyr genom att synas på sociala medier. Vi vill
          synliggöra vad naturen har att erbjuda människor genom att befinna oss
          där deras ögon ofta fastnar.
          <br />
          <br />
          Vi tror på samhörighet och att alla vill göra märkbar nytta, och just
          därför tror vi att kampanjen Bli ihop med STF kommer att få en
          spridning över hela Sverige.
          <br />
          <br />
          <b>Så nu till frågan! Vill du bil ihop med oss?</b>
        </Text>
      </TextContainer>
    </Container>
  );
};

export default PrintSection;
