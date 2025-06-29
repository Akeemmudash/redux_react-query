import { useSelector } from "react-redux";
import { useUsersQuery } from "../api/queries";
import { useUpdateUserMutation } from "../api/mutations";

const UsersList = () => {
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const { data: users, isLoading, error } = useUsersQuery();
  const { mutate: updateUser } = useUpdateUserMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error: {error.message}</div>;

  const filtereredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleUpdate = (userId) => {
    updateUser({ id: userId, name: "Updated Name" });
  };
  return (
    <div>
      {filtereredUsers.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => handleUpdate(user.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
