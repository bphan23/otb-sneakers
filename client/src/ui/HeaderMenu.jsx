import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 680px) {
    gap: 0.6rem;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--color-grey-100);
    outline: none;
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

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { cart } = user.user_metadata;

  return (
    <StyledHeaderMenu>
      <li>
        <StyledButton onClick={() => navigate("/account")} aria-label="Account">
          <HiOutlineUser />
        </StyledButton>
      </li>
      <li>
        <StyledButton onClick={() => navigate("/checkout")}>
          <FaShoppingCart />
          {cart.length !== 0 ? `(${cart.length})` : ""}
        </StyledButton>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
