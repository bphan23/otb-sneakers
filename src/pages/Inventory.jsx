import InventoryTable from "../features/InventoryTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Inventory() {
  return (
    <>
      <Row>
        <Heading as="h1">Current Inventory</Heading>
        <p>Filter / Sort </p>
      </Row>

      <Row>
        <InventoryTable />
      </Row>
    </>
  );
}

export default Inventory;
