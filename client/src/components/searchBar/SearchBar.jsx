import { useState } from "react";
import styles from "./SearchBar.module.css";
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
        className={styles.input}
        type="search"
        onChange={handleChange}
        value={driverName}
        placeholder="write drives`s name"
      />
    </div>
  );
};

export default SearchBar;
