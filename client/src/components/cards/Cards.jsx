import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions/actions";
import Card from "../card/Card";
const Cards = () => {
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDrivers());
  }, []);
  return (
    <div>
      {drivers?.map((driver) => {
        return (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            lastName={driver.lastName}
            image={driver.image}
            dob={driver.dob}
            nationality={driver.nationality}
            description={driver.description}
          />
        );
      })}
    </div>
  );
};
export default Cards;
