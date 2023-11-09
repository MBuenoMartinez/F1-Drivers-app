import { Link } from "react-router-dom";

import styles from "./Card.module.css";
const Card = ({ id, name, lastName, image, teams }) => {
  return (
    <div className={styles.card}>
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
