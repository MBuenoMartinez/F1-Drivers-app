import SearchBar from "../searchBar/SearchBar";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Nav.module.css";

import logo from "/images/f1Logo.png";
const Nav = ({ onSearch }) => {
  const location = useLocation();
  return (
    <nav className={styles.container}>
      <img src={logo} alt="f1Logo" className={styles.img} />
      {location.pathname !== "/drivers" ? (
        <Button link={"/drivers"} text={"Home"} />
      ) : (
        ""
      )}
      {location.pathname === "/drivers" && (
        <>
          <SearchBar onSearch={onSearch} />
          <Button link="/createDriver" text="Create Driver" />
        </>
      )}
      <Button link="/landingPage" text="Exit" />
    </nav>
  );
};
export default Nav;
