import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 

import MainNavigation from './components/Navigation/MainNavigation'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home';
import About from './pages/About';
import styled from 'styled-components';
import Projects from './pages/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';

//import Footer from './components/Navigation/Footer';



const StyledMain = styled.main`
  margin-top: 0;
`

function App() {

  return (
    <>
    <Router>

      <GlobalStyles/>
      <MainNavigation/>
      <StyledMain>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </StyledMain>
     </Router>
    </>
  )
}

export default App