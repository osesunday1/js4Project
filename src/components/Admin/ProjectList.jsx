import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';

const ListWrapper = styled.div`
  padding: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Button = styled.button`
  background: ${(props) => props.bg || '#6a0dad'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    projectTitle: '',
    description: '',
    TeckStack: '',
    video: ''
  });

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, 'projects'));
    setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'projects', id));
    fetchProjects();
  };

  const startEditing = (project) => {
    setEditingId(project.id);
    setEditData({
      projectTitle: project.projectTitle || '',
      description: project.description || '',
      TeckStack: project.TeckStack || '',
      video: project.video || ''
    });
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, 'projects', id), editData);
    setEditingId(null);
    fetchProjects();
  };

  return (
    <ListWrapper>
      <h2>Projects</h2>
      <Grid>
        {projects.map((proj) => (
          <CourseCard key={proj.id}>
            {editingId === proj.id ? (
              <>
                <Input
                  value={editData.projectTitle}
                  onChange={(e) => setEditData({ ...editData, projectTitle: e.target.value })}
                  placeholder="Title"
                />
                <Input
                  value={editData.description}
                  onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  placeholder="Description"
                />
                <Input
                  value={editData.TeckStack}
                  onChange={(e) => setEditData({ ...editData, TeckStack: e.target.value })}
                  placeholder="Tech Stack"
                />
                <Input
                  value={editData.video}
                  onChange={(e) => setEditData({ ...editData, video: e.target.value })}
                  placeholder="Video URL"
                />
                <Button onClick={() => handleUpdate(proj.id)} bg="#10b981">Save</Button>
                <Button onClick={() => setEditingId(null)} bg="#6b7280">Cancel</Button>
              </>
            ) : (
              <>
                <h3>{proj.projectTitle}</h3>
                <p>{proj.description}</p>
                <Button onClick={() => startEditing(proj)} bg="#3b82f6">Edit</Button>
                <Button onClick={() => handleDelete(proj.id)} bg="#dc2626">Delete</Button>
              </>
            )}
          </CourseCard>
        ))}
      </Grid>
    </ListWrapper>
  );
};

export default ProjectList;