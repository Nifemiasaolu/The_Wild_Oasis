import { useQuery } from "@tanstack/react-query";
import { getCabins as getCabinsAPI } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["Cabins"],
    queryFn: getCabinsAPI,
  });

  return {isLoading, error, cabins}
}

