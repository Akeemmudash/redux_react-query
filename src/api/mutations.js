import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateUser = async ({ id, name }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ id, name }),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      // Invalidate users query to refetch update data
      queryClient.invalidateQueries(["users"]);
    },
  });
};
