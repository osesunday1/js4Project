import styled from "styled-components";
import useScrolled from "../../CustomHooks/useScrolled";


const StyledMainHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ scrolled }) => (scrolled ? 'var(--purple0)' : '')};
  transition: background 0.3s ease-in-out;
  padding: 10 1rem;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const MainHeader = ({ children }) => {
  const scrolled = useScrolled();

  return <StyledMainHeader  scrolled={scrolled}>{children}</StyledMainHeader>;
};

export default MainHeader;