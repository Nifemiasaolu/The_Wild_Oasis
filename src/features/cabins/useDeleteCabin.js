import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  // To delete, you use useMutation hook
  const { isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: id=> deleteCabin(id)
    mutationFn: deleteCabinAPI,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Cabins"],
      });
      toast.success("Cabin successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return {isDeleting, deleteCabin}; 
}
