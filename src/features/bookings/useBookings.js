import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filteredValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { bookings, isLoading, error };
}

export default useBookings;
