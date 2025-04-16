import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dummyProject } from "../../assets/assets";

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction:row;
  flex-wrap:wrap;
  padding: 2rem;
  margin:auto;
  justify-content: center;
  background:#6a0dad;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 350px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--purple0, #6a0dad);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const ProjectList = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    navigate(`/projects/${project._id}`, { state: project });
  };

  return (
    <Grid>
      {dummyProject.map(project => (
        <Card key={project._id}>
          <Image src={project.photo} alt={project.projectTitle} />
          <Content>
            <Title>{project.projectTitle}</Title>
            <Description>{project.description}</Description>
            <Button onClick={() => handleClick(project)}>View Details</Button>
          </Content>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectList;