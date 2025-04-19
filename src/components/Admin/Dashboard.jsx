// src/components/Admin/Dashboard.js
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  padding: 2rem;
`;

const StatBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  flex: 1;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  th {
    background-color: #f3f4f6;
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <StatBoxContainer>
        <StatBox>
          <div style={{ fontSize: '2rem' }}>👤</div>
          <h3>5</h3>
          <p>Total Enrolments</p>
        </StatBox>
        <StatBox>
          <div style={{ fontSize: '2rem' }}>📘</div>
          <h3>8</h3>
          <p>Total Courses</p>
        </StatBox>
        <StatBox>
          <div style={{ fontSize: '2rem' }}>💰</div>
          <h3>$707.38</h3>
          <p>Total Earnings</p>
        </StatBox>
      </StatBoxContainer>

      <h2>Latest Enrollments</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Course Title</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'John Doe', course: 'Foundations of a Strong Relationship' },
            { name: 'Jane Smith', course: 'Pre-Marital Counseling' },
            { name: 'Michael Johnson', course: 'Love Languages & Emotional Connection' },
            { name: 'Sarah Williams', course: 'Conflict Resolution for Couples' },
            { name: 'David Brown', course: 'Managing Finances as a Couple' }
          ].map((entry, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.course}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DashboardWrapper>
  );
};

export default Dashboard;