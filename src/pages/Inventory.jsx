import { useEffect } from "react";
import { getInventory } from "../services/apiInventory";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Inventory() {
  // load data on mount
  useEffect(function () {
    getInventory().then((data) => console.log(data));
  }, []);
  return (
    <Row>
      <Heading as="h1">All Inventory</Heading>
      <p>TEST</p>
      <img src="https://srlwfweycsobeyeikycc.supabase.co/storage/v1/object/public/inventory-images/af1-ow-black.jpeg" />
    </Row>
  );
}

export default Inventory;
