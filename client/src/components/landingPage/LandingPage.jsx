import Button from "../button/Button";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.conteiner}>
      <Button link={"/drivers"} text={"Iniciar"} />
    </div>
  );
};
export default LandingPage;
