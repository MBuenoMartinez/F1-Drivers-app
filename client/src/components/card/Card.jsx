const Card = ({ name, lastName, image, nationality }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{lastName}</p>
      <img src={image} alt={lastName} />
      <p>{nationality}</p>
    </div>
  );
};
export default Card;
