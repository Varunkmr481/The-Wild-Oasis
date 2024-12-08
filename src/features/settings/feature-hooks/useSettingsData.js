import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../../services/apiSettings";

function useSettingsData() {
  const {
    isLoading,
    error,
    data: settingsData,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settingsData };
}

export default useSettingsData;
