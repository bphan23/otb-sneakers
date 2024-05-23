import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useClearCart() {
  const queryClient = useQueryClient();

  const { mutate: clearUserCart, isLoading: isUpdating } = useMutation({
    mutationFn: updateCart,
    onSuccess: ({ user }) => {
      // FIX: want to display only one at a time
      // toast.success("All items successfully cleared from cart");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { clearUserCart, isUpdating };
}
