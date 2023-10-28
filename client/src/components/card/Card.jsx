import { Link } from "react-router-dom";
const Card = ({ id, name, lastName, image, nationality }) => {
  return (
    <div>
      <Link to={`/drivers/${id}`}>
        <p>{name}</p>
        <p>{lastName}</p>
      </Link>
      <img src={image} alt={lastName} />
      <p>{nationality}</p>
    </div>
  );
};
export default Card;
