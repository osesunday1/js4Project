import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 8rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Tech = styled.p`
  font-weight: bold;
  font-size: 0.95rem;
  color: var(--purple0, #6a0dad);
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f3f3;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  font-size: 1rem;
  font-weight: bold;
  color: #999;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: var(--purple0, #6a0dad);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #5a0099;
  }
`;

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  if (!state) {
    navigate("/projects");
    return null;
  }

  const { projectTitle, description, TeckStack, video } = state;

  const getYouTubeEmbedURL = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  useEffect(() => {
    setVideoLoaded(false);
  }, [video]);

  return (
    <Wrapper>
      <Title>{projectTitle}</Title>
      <Description>{description}</Description>
      <Tech>Tech Stack: {TeckStack}</Tech>

      {video && (
        <>
          {!videoLoaded && <LoadingMessage>Loading video...</LoadingMessage>}

          <VideoWrapper style={{ display: videoLoaded ? "block" : "none" }}>
            <iframe
              src={getYouTubeEmbedURL(video)}
              title="Project Demo Video"
              onLoad={() => setVideoLoaded(true)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </>
      )}

      <Button onClick={() => navigate("/projects")}>← Back to Project List</Button>
    </Wrapper>
  );
};

export default ProjectDetails;