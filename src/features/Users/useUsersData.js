import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

function useUsersData() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isLoading, users, error };
}

export default useUsersData;
