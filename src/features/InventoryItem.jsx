/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";

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

const ItemButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  align-self: end;
`;

function InventoryItem({ item }) {
  const { name, size, price, image } = item;
  return (
    <StyledInventoryItem>
      <ItemName>{name}</ItemName>
      <Img src={image} alt={name} />
      <Price>{formatCurrency(price)}</Price>
      <Size>Size {size}</Size>
      <ItemButton>Add</ItemButton>
    </StyledInventoryItem>
  );
}

export default InventoryItem;
