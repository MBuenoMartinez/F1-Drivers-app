import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriversByName } from "../../redux/actions/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [driverName, setDriverName] = useState("");

  const handleChange = (event) => {
    const name = event.target.value;
    setDriverName(name);
    dispatch(getDriversByName(name));
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={driverName} />
    </div>
  );
};

export default SearchBar;
