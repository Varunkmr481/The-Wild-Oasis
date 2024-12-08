import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  // eslint-disable-next-line
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),

    // invalidate cache as soon as mutation is done for cabins table
    onSuccess: () => {
      toast.success("Cabin deleted successfully!");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    // for error
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
