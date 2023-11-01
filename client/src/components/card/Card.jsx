import { Link } from "react-router-dom";
const Card = ({ id, name, lastName, image, teams }) => {
  return (
    <div>
      <Link to={`/drivers/${id}`}>
        <p>{name}</p>
        <p>{lastName}</p>
      </Link>
      <img src={image} alt={lastName} />
      <p>Teams: {teams}</p>
    </div>
  );
};
export default Card;
