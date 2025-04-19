import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 10rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Tech = styled.p`
  font-weight: bold;
  color: var(--purple0, #6a0dad);
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  margin-top: 1.5rem;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/projects");
    return null;
  }

  const { projectTitle, description, TeckStack, video } = state;

  const getYouTubeEmbedURL = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  return (
    <Wrapper>
      <Title>{projectTitle}</Title>
      <Description>{description}</Description>
      <Tech>Tech Stack: {TeckStack}</Tech>

      {video && (
        <VideoWrapper>
          <iframe
            src={getYouTubeEmbedURL(video)}
            title="Project Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      )}
    </Wrapper>
  );
};

export default ProjectDetails;