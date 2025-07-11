import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    select: (data) => data,
  });
};
