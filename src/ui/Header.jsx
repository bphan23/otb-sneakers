import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-brand-600);
`;

function Header() {
  // let userLoggedIn = false;

  // if logged in -> Hi user
  // otherwise -> Please Login

  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}

export default Header;
