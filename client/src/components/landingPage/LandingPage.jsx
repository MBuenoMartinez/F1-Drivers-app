import Button from "../button/Button";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the F1 racers application</h1>
      <div className={styles.button}>
        <Button link={"/drivers"} text={"Start"} />
      </div>
    </div>
  );
};
export default LandingPage;
