import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 680px) {
    padding: 0.3rem;

    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <StyledButton disabled={isLoading} onClick={logout}>
        Sign out
        <HiArrowRightOnRectangle />
      </StyledButton>
    </>
  );
}

export default Logout;
