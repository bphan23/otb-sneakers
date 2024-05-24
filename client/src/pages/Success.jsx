/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useClearCart } from "../features/authentication/useClearCart";
import { useEffect, useState } from "react";
import { useUpdateInventory } from "../features/inventory/useUpdateInventory";

const StyledSuccessCheckout = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
`;

const SuccessCheckoutHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const CartOrderedList = styled.ul`
  list-style-type: square;
  padding: 0 2rem;
`;

const CartListItem = styled.li`
  margin-bottom: 1.5rem;
`;

const LineBreak = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

function Success() {
  const { user } = useUser();
  let { cart } = user.user_metadata;

  const [purchasedItems, setPurchasedItems] = useState(cart);
  let totalPrice = purchasedItems.reduce((sum, item) => sum + item.price, 0);

  const { updateInventoryData, isUpdating } = useUpdateInventory();
  const { clearUserCart, isClearing } = useClearCart();

  console.log(purchasedItems);
  // mark all items in cart as sold
  for (let i = 0; i < purchasedItems.length; i++) {
    console.log(purchasedItems[i].id);
    // updateInventoryData(purchasedItems[i].id);
  }

  cart = [];
  useEffect(() => {
    // clear current cart on load
    clearUserCart({
      cart,
    });
  }, []);

  return (
    <>
      <SuccessCheckoutHeader>
        Purchase was successful! Enjoy your new sneakers!
      </SuccessCheckoutHeader>
      <StyledSuccessCheckout>
        <h3>Items purchased:</h3>
        <LineBreak />
        {/* list of items*/}
        <CartOrderedList>
          {purchasedItems.map((item) => (
            <CartListItem key={item.id}>
              {item.name} - Size {item.size} | ${item.price}
            </CartListItem>
          ))}
        </CartOrderedList>
        <LineBreak />
        <b>Total Price: ${totalPrice}</b>
        <LineBreak />
      </StyledSuccessCheckout>
    </>
  );
}

export default Success;
