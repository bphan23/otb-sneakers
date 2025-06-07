import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1rem 3rem;

  color: var(--color-brand-600);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding: 1.2rem 4.8rem;
    gap: 2.4rem;
  }
`;

const SidebarToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-brand-600);
  padding: 0.4rem 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-grey-100);
  }

  /* Show only on small screens */
  @media (min-width: 768px) {
    display: none;
  }
`;

function Header({ onToggleSidebar }) {
  return (
    <StyledHeader>
      <SidebarToggleButton
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </SidebarToggleButton>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

Header.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
};

export default Header;
