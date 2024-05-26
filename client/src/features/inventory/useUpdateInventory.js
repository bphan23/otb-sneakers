import { updateInventory } from "../../services/apiInventory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateInventory() {
  const queryClient = useQueryClient();

  const { mutate: updateInventoryData, isLoading: isUpdating } = useMutation({
    mutationFn: (id) => updateInventory(id),
    onSuccess: () => {
      // toast.success("Inventory successfully updated", {
      //   id: "soldItems",
      // });
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateInventoryData, isUpdating };
}
