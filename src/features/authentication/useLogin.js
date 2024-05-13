import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      // manually set data into react query cache
      queryClient.setQueryData(["user"], user.user);
      navigate("/inventory", { replace: true });
    },
    onError: (err) => {
      toast.error("" + err);
    },
  });

  return { login, isLoading };
}
