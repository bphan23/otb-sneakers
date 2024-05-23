/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useUser } from "../features/authentication/useUser";
import { useUpdateCart } from "../features/authentication/useUpdateCart";

const StyledCartCheckout = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
`;

const CartCheckoutHeader = styled.h1`
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

function CartCheckout() {
  const { user } = useUser();
  let { cart } = user.user_metadata;

  let itemsInCart = false;
  if (cart.length !== 0) {
    itemsInCart = true;
  }

  let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const { updateUserCart, isUpdating } = useUpdateCart();

  function handleClearCart() {
    // clear all items from cart
    cart = [];
    updateUserCart({
      cart,
    });
    console.log("cleared cart");
  }

  function handleCheckout() {
    // Go to stripe
    // Calculate correct total price and all items when checking oout from stripe
    console.log("Go to stripe");
  }
  return (
    <>
      <CartCheckoutHeader>Cart Checkout</CartCheckoutHeader>
      {/* list of items in cart */}
      <StyledCartCheckout>
        <h3>{itemsInCart ? "Current Items in Cart:" : "No Items in Cart: "}</h3>
        <LineBreak />
        {itemsInCart ? (
          <CartOrderedList>
            {cart.map((item) => (
              <CartListItem key={item.id}>
                {item.name} - Size {item.size} | ${item.price}
              </CartListItem>
            ))}
          </CartOrderedList>
        ) : (
          <p>You currently have nothing in your cart, please add some items!</p>
        )}

        <LineBreak />
        <b>Total Price: ${totalPrice}</b>
        <LineBreak />

        {/* Buttons */}
        <FormRow>
          <Button variation="secondary" onClick={handleClearCart}>
            Clear
          </Button>
          <Button>Checkout</Button>
        </FormRow>
      </StyledCartCheckout>
    </>
  );
}

export default CartCheckout;
