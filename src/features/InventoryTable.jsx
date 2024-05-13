/* eslint-disable react/prop-types */
import InventoryItem from "./inventory/InventoryItem";
import styled from "styled-components";

const Inventory = styled.div`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 5rem;
`;

function InventoryTable({ allData, inventoryData }) {
  let updatedData;
  if (inventoryData !== undefined) {
    updatedData = inventoryData;
  } else {
    updatedData = allData;
  }

  return (
    <Inventory>
      {updatedData.map((item) => (
        <InventoryItem item={item} key={item.id} />
      ))}
    </Inventory>
  );
}

export default InventoryTable;
