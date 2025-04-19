// src/components/Admin/AdminTopbar.js
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Topbar = styled.header`
  height: 70px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`;

const LogoutButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

const AdminTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Topbar>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Topbar>
  );
};

export default AdminTopbar;