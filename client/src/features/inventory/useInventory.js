import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../../services/apiInventory";

export function useInventory() {
  const {
    isLoading,
    data: allItems,
    error,
  } = useQuery({
    // uniquely identify data
    queryKey: ["inventory"],
    // function responsible for querying
    queryFn: getInventory,
  });

  return { isLoading, error, allItems };
}
