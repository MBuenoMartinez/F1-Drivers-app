import SearchBar from "../searchBar/SearchBar";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";
const Nav = ({ onSearch }) => {
  const location = useLocation();
  return (
    <nav>
      {location.pathname !== "/drivers" ? (
        <Button link={"/drivers"} text={"Home"} />
      ) : (
        ""
      )}
      {location.pathname === "/drivers" && (
        <>
          <SearchBar onSearch={onSearch} />
          <Button link="/createDriver" text="Create Driver" />
          <Button link="/" text="Exit" />
        </>
      )}
    </nav>
  );
};
export default Nav;
