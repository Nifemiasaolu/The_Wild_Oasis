import toast from "react-hot-toast";
// import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserAPI } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // mutationFn: (id) => updateCurrentUserAPI(id), // Same as below
    mutationFn: updateCurrentUserAPI,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");

      // Updating data manually in the cache using queryClient.setQueryData
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
