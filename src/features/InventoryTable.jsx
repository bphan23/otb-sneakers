/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../services/apiInventory";
import InventoryItem from "./InventoryItem";
import styled from "styled-components";

const Inventory = styled.div`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 5rem;
`;

function InventoryTable() {
  const {
    isLoading,
    data: allItems,
    error,
  } = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory,
  });

  console.log(allItems);
  console.log(isLoading, error);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Inventory>
      {allItems.map((item) => (
        <InventoryItem item={item} key={item.id} />
      ))}
    </Inventory>
  );
}

export default InventoryTable;
