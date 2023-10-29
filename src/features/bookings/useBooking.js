import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking as getBookingAPI } from "../../services/apiBookings";

export function useBooking() {
  // Read out Id using useParams from the URL
  const {bookingId} = useParams()
  // "bookingId is used bcos thats what we used to define out route path "/booking/:bookingId"

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: ()=> getBookingAPI(bookingId),
    retry: false,
  });

  return {isLoading, error, booking}
}

