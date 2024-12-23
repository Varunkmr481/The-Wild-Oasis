import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookingsData() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, methodName: "gte" };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    // dependency array
    queryKey: ["bookings", filterValue],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
