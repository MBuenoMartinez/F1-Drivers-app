import Button from "../button/Button";
const Nav = () => {
  return (
    <nav>
      <Button link={"/drivers"} text={"Home"} />
      <Button link={"/createDriver"} text={"Create Driver"} />
    </nav>
  );
};
export default Nav;
