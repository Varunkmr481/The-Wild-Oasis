import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

// storing current logged in details in cache
export function useUser() {
  // useQuery can only be called in react component or custom react hook
  const { data: user, isLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
