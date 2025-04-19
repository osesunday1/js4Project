// ✅ AdminLayout.js (sidebar + topbar wrapper)
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import AdminTopbar from "../Navigation/AdminTopbar";

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const TitleContainer = styled.div`
  color: white;
  width: 500px;
  height: 90%;
  margin-top: 7px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;


const Sidebar = styled.aside`
  width: 250px;
  background: #f9fafb;
  padding: 2rem 1rem;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Topbar = styled.header`
  height: 70px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  color: #4b5563;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #374151;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    background: #e0e7ff;
  }
`;

const AdminLayout = () => {
  return (
    <LayoutWrapper>
      <Sidebar>
        <NavLink to="/admin/add">Add Project</NavLink>
        <NavLink to="/admin">My Projects</NavLink>
      </Sidebar>
      <Main>
      <AdminTopbar />
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
};

export default AdminLayout;
