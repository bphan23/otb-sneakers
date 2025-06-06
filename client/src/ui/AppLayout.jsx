import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  grid-template-areas:
    "sidebar header"
    "sidebar main";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "header"
      "sidebar"
      "main";
  }
`;

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;

  @media (max-width: 768px) {
    padding: 0; /* Let Sidebar handle its own padding */
    border-right: none;
    border-bottom: 1px solid var(--color-grey-100);
    position: relative;
    z-index: 1100; /* Above Header */
  }
`;

const HeaderWrapper = styled.header`
  grid-area: header;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    justify-content: space-between;
  }
`;

const Main = styled.main`
  grid-area: main;
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StyledAppLayout>
      <SidebarWrapper>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </SidebarWrapper>
      <HeaderWrapper>
        <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      </HeaderWrapper>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
