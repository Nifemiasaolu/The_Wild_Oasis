import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  // To delete, you use useMutation hook
  const { isDeleteBooking, mutate: deleteBooking } = useMutation({
    // mutationFn: id=> deleteBookingAPI(id)
    mutationFn: deleteBookingAPI,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      toast.success("Booking successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return {isDeleteBooking, deleteBooking}; 
}
