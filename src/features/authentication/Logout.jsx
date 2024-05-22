import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import styled from "styled-components";

const StyledLogoutDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
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
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <StyledLogoutDiv>
      <StyledButton disabled={isLoading} onClick={logout}>
        <HiArrowRightOnRectangle />
      </StyledButton>
    </StyledLogoutDiv>
  );
}

export default Logout;
