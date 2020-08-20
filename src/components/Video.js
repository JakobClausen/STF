import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Video = () => {
  return (
    <VideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/https://www.youtube.com/watch?v=dAcGM4pmo6w&feature=youtu.be?v=ug50zmP9I7s"
        controls={true}
        muted={false}
        playing={false}
        width="100%"
        height="50vh"
      />
    </VideoContainer>
  );
};

export default Video;
