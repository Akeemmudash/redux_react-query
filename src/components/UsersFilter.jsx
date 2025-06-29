import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/filters/filtersSlice";

const UsersFilter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search users..."
    />
  );
};

export default UsersFilter;
