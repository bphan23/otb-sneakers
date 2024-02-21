import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-brand-600);
`;

function Header() {
  return <StyledHeader>Out The Box Sneakers</StyledHeader>;
}

export default Header;
