/* eslint-disable no-unused-vars */
import styled from "styled-components";
import InventoryTable from "../features/InventoryTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//import fontawesome search icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useInventory } from "../features/inventory/useInventory";
import { useSearchParams } from "react-router-dom";

const SearchFilterContainer = styled.div``;
const SearchInput = styled.input`
  height: 4rem;
  width: 25%;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 1rem;
  font-size: 1.2rem;
  margin-right: 0.2rem;

  &::placeholder {
    color: #b3b3b3;
  }

  &:focus {
    outline: none;
    box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.2);
  }
`;
const SearchButton = styled.button`
  height: 4rem;
  color: white;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: var(--color-brand-600);
  margin-right: 0.2rem;
`;

const FilterInput = styled.select`
  height: 4rem;
  color: white;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: var(--color-brand-600);
`;

function Inventory() {
  const { isLoading, allItems } = useInventory();
  const [inventoryData, setInventoryData] = useState(allItems);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!allItems.length) {
    return <h1>No current items available!</h1>;
  }

  function handleFilter(event) {
    let filterValue = event.target.value;

    if (filterValue === "all") {
      setInventoryData(allItems);
    } else {
      const filterResults = allItems.filter((item) => {
        if (item.brand.toLowerCase() === filterValue) {
          return true;
        } else {
          return false;
        }
      });

      setInventoryData(filterResults); // update data
      document.getElementById("search-input").value = ""; // reset search
    }
  }

  function handleSearch(event) {
    let searchInput = event.target.value.toLowerCase();
    if (event.key === "Enter") {
      const searchResults = allItems.filter((item) => {
        if (item.name.toLowerCase().includes(searchInput)) {
          return true;
        } else {
          return false;
        }
      });
      setInventoryData(searchResults); // update data
      document.getElementById("search-input").value = ""; // reset search
      document.getElementById("select-filter").value = "all"; // reset filter
    }
  }

  function handleClick() {
    let searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const searchResults = allItems.filter((item) => {
      if (item.name.toLowerCase().includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
    setInventoryData(searchResults); // update data
    document.getElementById("search-input").value = ""; // reset search
    document.getElementById("select-filter").value = "all"; // reset filter
  }

  return (
    <>
      <Row>
        <Heading as="h1">Current Inventory</Heading>
        {/* search and filter */}
        <SearchFilterContainer>
          {/* search */}
          <SearchInput
            id="search-input"
            placeholder="Search sneaker here..."
            onKeyDown={handleSearch}
          />
          <SearchButton onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchButton>
          {/* filter */}
          <FilterInput onChange={handleFilter} id="select-filter">
            <option value="all">Filter by brand</option>
            <option value="nike">Nike</option>
            <option value="jordan">Jordan</option>
            <option value="adidas">Adidas</option>
            <option value="asics">Asics</option>
          </FilterInput>
        </SearchFilterContainer>
      </Row>

      <Row>
        <InventoryTable allData={allItems} inventoryData={inventoryData} />
      </Row>
    </>
  );
}

export default Inventory;
