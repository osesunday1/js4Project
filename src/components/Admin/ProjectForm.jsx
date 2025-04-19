// src/components/Admin/ProjectForm.js
import { useState } from 'react';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const FormWrapper = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  background-color: #6a0dad;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const ProjectForm = () => {
  const [data, setData] = useState({
    projectTitle: '',
    description: '',
    TeckStack: '',
    video: '',
    photo: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'projects'), data);
    alert('Project added!');
    setData({ projectTitle: '', description: '', TeckStack: '', video: '', photo: '' });
  };

  return (
    <FormWrapper>
      <h2>Add New Project</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="projectTitle" placeholder="Project Title" value={data.projectTitle} onChange={handleChange} />
        <Input name="description" placeholder="Description" value={data.description} onChange={handleChange} />
        <Input name="TeckStack" placeholder="Tech Stack" value={data.TeckStack} onChange={handleChange} />
        <Input name="video" placeholder="YouTube URL" value={data.video} onChange={handleChange} />
        <Button type="submit">Add Course</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProjectForm;