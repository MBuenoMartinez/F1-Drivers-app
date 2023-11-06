import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDriver } from "../../redux/actions/actions";
import styles from "./Card.module.css";
const Card = ({ id, name, lastName, image, teams }) => {
  const dispatch = useDispatch();
  const handleDriversDb = () => {
    const result = window.confirm("Surely you want to delete the driver?");
    if (result) {
      dispatch(deleteDriver(id));
      window.location.reload();
    }
  };
  return (
    <div className={styles.card}>
      {isNaN(id) ? (
        <button onClick={handleDriversDb} className={styles.button}>
          X
        </button>
      ) : (
        ""
      )}
      <Link to={`/drivers/${id}`}>
        <h3>{name}</h3>
        <h3>{lastName}</h3>
        <img src={image} alt={lastName} className={styles.img} />
        <h3>Teams:</h3>
        <h3>{teams}</h3>
      </Link>
    </div>
  );
};
export default Card;
