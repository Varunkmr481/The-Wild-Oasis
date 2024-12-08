import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // same as createCabin
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin succesfully edited!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}

export default useEditCabin;
