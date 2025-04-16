import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
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

const VideoLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
`;

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/projects");
    return null;
  }

  const { projectTitle, description, TeckStack, video, photo } = state;

  return (
    <Wrapper>
      <Image src={photo} alt={projectTitle} />
      <Title>{projectTitle}</Title>
      <Description>{description}</Description>
      <Tech>Tech Stack: {TeckStack}</Tech>
      <VideoLink href={video} target="_blank" rel="noopener noreferrer">
        🎬 Watch Demo
      </VideoLink>
    </Wrapper>
  );
};

export default ProjectDetails;