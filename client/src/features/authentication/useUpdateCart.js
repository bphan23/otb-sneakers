import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const { mutate: updateUserCart, isLoading: isUpdating } = useMutation({
    mutationFn: updateCart,
    onSuccess: ({ user }) => {
      toast.success("Item successfully added to cart", {
        id: "added",
      });
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserCart, isUpdating };
}
