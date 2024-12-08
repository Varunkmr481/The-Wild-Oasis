import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/apiCabins";

function useCabinsData() {
  const {
    isLoading,
    data: cabins,
    // eslint-disable-next-line
    error,
  } = useQuery({
    // uniquely identifies data, can be used to fetch data in any comp
    queryKey: ["cabins"],

    // fn for data fetching
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}

export default useCabinsData;
