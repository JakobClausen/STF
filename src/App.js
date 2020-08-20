import React from "react";
import styled from "styled-components";
import Video from "./components/Video";
import UpperText from "./components/UpperText";
import SocialBig from "./components/SocialBig";
import SocialSmall from "./components/SocialSmall";
import PrintSection from "./components/PrintSection";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Video />
      <UpperText />
      <SocialBig />
      <SocialSmall />
      <PrintSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
