import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    // mutationFn: createEditCabin, // Same as below
    mutationFn: (newCabin) => createEditCabinAPI(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully added");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return{createCabin, isCreating};
}
