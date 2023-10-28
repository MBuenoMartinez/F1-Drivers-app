import Button from "../button/Button";

const Nav = () => {
  return (
    <nav>
      <Button link={"/drivers"} text={"Home"} />
      <Button link={"/drivers/createYourDriver"} text={"Create Driver"} />
    </nav>
  );
};
export default Nav;
