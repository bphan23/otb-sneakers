import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useClearCart() {
  const queryClient = useQueryClient();

  const { mutate: clearUserCart, isLoading: isClearing } = useMutation({
    mutationFn: updateCart,
    onSuccess: ({ user }) => {
      toast.success("All items successfully cleared from cart", {
        id: "cleared",
      });
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { clearUserCart, isClearing };
}
