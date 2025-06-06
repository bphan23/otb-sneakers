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

  @media (max-width: 768px) {
    padding: 0.4rem;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--color-red-500);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 1.4rem;
    height: 1.4rem;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();

  // Safely extract cart from user metadata; default to empty array
  const { cart = [] } = user?.user_metadata || {};

  return (
    <StyledHeaderMenu>
      <li>
        <StyledButton onClick={() => navigate("/account")} aria-label="Account">
          <HiOutlineUser />
        </StyledButton>
      </li>
      <li>
        <StyledButton onClick={() => navigate("/checkout")} aria-label="Cart">
          <FaShoppingCart />
          {cart.length > 0 && <CartBadge>{cart.length}</CartBadge>}
        </StyledButton>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
