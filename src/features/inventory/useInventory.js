import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../../services/apiInventory";

export function useInventory() {
  const {
    isLoading,
    data: allItems,
    error,
  } = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory,
  });

  return { isLoading, error, allItems };
}
