/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { useState } from "react";
import { useUpdateCart } from "../authentication/useUpdateCart";

const StyledInventoryItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5rem 1fr 3rem 3rem;
  border: 1px solid var(--color-grey-100);
  background-color: white;
  padding: 3rem;
  grid-row-gap: 1.5rem;
  border-radius: 10%;
`;

const ItemName = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Img = styled.img`
  grid-column: 1 /-1;
  grid-row: 2 / 3;
`;

const Size = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  justify-self: start;
  font-family: "Sono";
  font-weight: 500;
`;

const Price = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  justify-self: end;
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-brand-500);
`;

const AddItemButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  align-self: end;
  font-size: 1.4rem;
  padding: 0.5rem 0.5rem;
  border: none;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  color: white;
  background-color: var(--color-grey-600);

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

const AddedItemButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  align-self: end;
  font-size: 1.4rem;
  padding: 0.5rem 0.5rem;
  border: none;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  color: white;
  background-color: var(--color-brand-600);
`;

function InventoryItem({ item }) {
  const { id, name, size, price, image, isSold } = item;

  const { user } = useUser();
  const { cart } = user.user_metadata;

  const { updateUserCart, isUpdating } = useUpdateCart();

  // check to see if item is currently added into cart
  let currentlyInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name && cart[i].inCart === true) {
      currentlyInCart = true;
    }
  }

  const [inUserCart, setInCart] = useState(currentlyInCart);
  const [currentCart, setCart] = useState(cart);

  // if item is marked as sold return -> don't create card for item
  if (isSold) return;

  // add to user metadata cart -> have data persist
  function handleAddToCart() {
    const addedItem = {
      id,
      name,
      size,
      price,
      image,
      inCart: true,
      isSold,
    };

    // update state
    setInCart(true);
    cart.push(addedItem);
    setCart(cart);

    // update user cart
    updateUserCart({
      cart,
    });
  }

  return (
    <StyledInventoryItem>
      <ItemName>{name}</ItemName>
      <Img src={image} alt={name} />
      <Price>{formatCurrency(price)}</Price>
      <Size>Size {size}</Size>
      {inUserCart !== true ? (
        <AddItemButton onClick={handleAddToCart} disabled={isUpdating}>
          Add
        </AddItemButton>
      ) : (
        <AddedItemButton disabled={inUserCart}>Added</AddedItemButton>
      )}
    </StyledInventoryItem>
  );
}

export default InventoryItem;
