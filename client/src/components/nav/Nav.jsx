import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
const Nav = () => {
  return (
    <nav>
      <Button link={"/drivers"} text={"Home"} />
      <SearchBar />
      <Button link={"/createDriver"} text={"Create Driver"} />
    </nav>
  );
};
export default Nav;
