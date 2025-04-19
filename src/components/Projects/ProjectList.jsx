import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
  margin: auto;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #6a0dad;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.75rem;
`;

const TechStack = styled.p`
  font-size: 0.8rem;
  color: #888;
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

const ProjectList = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        _id: doc.id,
      }));
      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) =>
    project?.projectTitle?.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
    project?.TeckStack?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <Grid>
      {filteredProjects.map((project) => (
        <Card key={project._id}>
          <Content>
            <Title>{project.projectTitle}</Title>
            <Description>{project.description}</Description>
            <TechStack><strong>Stack:</strong> {project.TeckStack}</TechStack>
            <Button onClick={() => navigate(`/projects/${project._id}`, { state: project })}>
              View Details
            </Button>
          </Content>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectList;