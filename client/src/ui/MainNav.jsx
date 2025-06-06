import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCog6Tooth,
  HiOutlineUsers,
} from "react-icons/hi2";
import { PiSneakerLight } from "react-icons/pi";

const NavContainer = styled.nav`
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-grey-600);

    padding: 1rem 1.5rem;
    border-radius: var(--border-radius-sm);
    transition: background-color 0.3s, color 0.3s;
  }

  &:hover,
  &:focus,
  &.active {
    background-color: var(--color-grey-50);
    color: var(--color-grey-800);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-400);
    transition: color 0.3s;
  }

  &:hover svg,
  &:focus svg,
  &.active svg {
    color: var(--color-brand-600);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.2rem;
    gap: 1rem;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function MainNav() {
  return (
    <NavContainer aria-label="Main navigation">
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/inventory">
            <PiSneakerLight />
            <span>Inventory</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/support">
            <HiOutlineUsers />
            <span>Support</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/account">
            <HiOutlineCog6Tooth />
            <span>Account</span>
          </StyledNavLink>
        </li>
      </NavList>
    </NavContainer>
  );
}

export default MainNav;
