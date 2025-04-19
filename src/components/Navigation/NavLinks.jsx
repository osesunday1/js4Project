import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import useScrolled from '../../CustomHooks/useScrolled';

const StyledNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledNavLinkItem = styled.li`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  border: 1px solid transparent;
  color: var(--white0);
  text-decoration: none;
  padding: 0.5rem;

  &:hover,
  &:active,
  &.active {
    background: var(--orange0);
    border-bottom: none;
    color: var(--white0);
  }

  @media (min-width: 768px) {
    font-size: 20px;
    color: ${({ scrolled }) => (scrolled ? '#fff' : 'var(--purple0)')};
    text-decoration: none;

    &:hover
     {
    background: none;
    color:var(--yello0);
    }

    &.active{
      background: none;
      color: ${({ scrolled }) => (scrolled ? 'var(--yello0)' : 'var(--orange0)')};
      border-bottom: ${({ scrolled }) => (scrolled ? '1px solid var(--yello0)' : '1px solid var(--orange0)')};
    }
  }
`;

const NavLinks = () => {

  const scrolled = useScrolled();
  return (
    <StyledNavLinks>
      <StyledNavLinkItem>
        <StyledNavLink scrolled={scrolled} to="/" activeClassName="active">HOME</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink scrolled={scrolled} to="/about" activeClassName="active">ABOUT US</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink scrolled={scrolled} to="/projects" activeClassName="active">PROJECTS</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink  scrolled={scrolled} to="/auth" activeClassName="active">ADMIN</StyledNavLink>
      </StyledNavLinkItem>
    </StyledNavLinks>
  );
}

export default NavLinks;