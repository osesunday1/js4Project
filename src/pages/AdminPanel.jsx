// src/pages/AdminPanel.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import ProjectForm from "../components/Admin/ProjectForm";
import ProjectList from "../components/Admin/ProjectList";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #6a0dad;
  margin-bottom: 2rem;
`;

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if (!loggedUser) {
        navigate("/auth");
      } else {
        setUser(loggedUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;

  return (
    <Wrapper>
      <Title>Admin Panel - Manage Projects</Title>
      <ProjectForm />
      <ProjectList />
    </Wrapper>
  );
};

export default AdminPanel;