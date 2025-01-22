import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import toast from "react-hot-toast";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteUserApi(id),
    onSuccess: () => {
      toast.success("User successfully deleted!");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteUser, isDeleting };
}
