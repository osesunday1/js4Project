import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import About from './pages/About';
import styled from 'styled-components';
import Projects from './pages/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import Auth from './pages/Auth';
import AdminLayout from './components/Admin/AdminLayout';
import ProjectForm from './components/Admin/ProjectForm';
import ProjectList from './components/Admin/ProjectList';
import Footer from './components/Navigation/Footer';




const StyledMain = styled.main`
  margin-top: 0;
`;


const AppContent = () => {
  const location = useLocation();

  // Check if the route starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <GlobalStyles />
      {/* Show public navigation only if not in /admin */}
      {!isAdminRoute && <MainNavigation />}

      <StyledMain>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          {/* Admin Layout with nested routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<ProjectList />} />
            <Route path="add" element={<ProjectForm />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      <Footer/>
      </StyledMain>
    </>
  );
};





function App() {
  return (
    <>
      <Router>
      <AppContent />
      </Router>
    </>
  );
}

export default App;