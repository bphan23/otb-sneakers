/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const StyledButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { cart } = user.user_metadata;

  if (!cart.length) return;
  return (
    <StyledHeaderMenu>
      <li>
        <StyledButton onClick={() => navigate("/account")}>
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
