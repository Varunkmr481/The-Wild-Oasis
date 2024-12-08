import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../../services/apiSettings";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    // same as createCabin, only 1 arg can be passed
    mutationFn: (newSetting) => updateSettingApi(newSetting),
    onSuccess: () => {
      toast.success("Setting succesfully updated!");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSetting };
}

export default useUpdateSetting;
