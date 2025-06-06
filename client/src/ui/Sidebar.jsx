import PropTypes from "prop-types";
import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { useEffect } from "react";

const SidebarWrapper = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-row: 1 / -1;
  min-width: 250px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    z-index: 1100;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Backdrop = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
`;

function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <Logo />
        <MainNav />
      </SidebarWrapper>
      <Backdrop isOpen={isOpen} onClick={onClose} aria-hidden={!isOpen} />
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
