import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [driverName, setDriverName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setDriverName(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={driverName}
        placeholder="write drives`s name"
      />
    </div>
  );
};

export default SearchBar;
