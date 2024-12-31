import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Removes the user from local storage and server + cache
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoggingOut };
}

export default useLogout;
