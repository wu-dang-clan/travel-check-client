import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUser, updateUser } from "@travel-check-client/ky";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
