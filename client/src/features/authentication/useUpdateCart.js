import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const { mutate: updateUserCart, isLoading: isUpdating } = useMutation({
    mutationFn: updateCart,
    onSuccess: ({ user }) => {
      // FIX: want to display only one at a time, if I added multiple items shows multiple times
      // toast.success("Item successfully added to cart");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserCart, isUpdating };
}
