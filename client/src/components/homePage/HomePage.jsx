import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDrivers,
  getAllTeams,
  filterDrivers,
  orderDrivers,
} from "../../redux/actions/actions";
import Card from "../card/Card";
import styles from "./HomePage.module.css";

const Home = () => {
  const drivers = useSelector((state) => state.drivers);
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const driversPerPage = 9;

  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getAllTeams());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [drivers]);

  const handleOrder = (event) => {
    const { value } = event.target;
    dispatch(orderDrivers(value));
  };

  const handleFilter = (event) => {
    const { value } = event.target;
    dispatch(filterDrivers(value));
  };

  const totalPages = Math.ceil(drivers.length / driversPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <label>Order alfabetic: </label>
        <select onChange={handleOrder}>
          <option value="AlfabeticAscendant">Ascendant</option>

          <option value="AlfabeticDescendant">Descendant</option>
        </select>
        <label>Order year of birth: </label>
        <select onChange={handleOrder}>
          <option value="YearOfBirthAscendant">Ascendant</option>

          <option value="YearOfBirthDescendant">Descendant</option>
        </select>
        <label>Filter by: </label>
        <select onChange={handleFilter}>
          <option value="AllDrivers">All Drivers</option>
          <option value="DriversFromApi">Drivers from Api</option>
          <option value="DriversFromDB">Drivers from DB</option>
        </select>
        <label>Filter by teams: </label>
        <select type="checkBoxe" onChange={handleFilter} multiple={false}>
          {teams
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((team, index) => (
              <option key={index} value={team.name}>
                {team.name}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.cards}>
        {drivers
          .slice(
            (currentPage - 1) * driversPerPage,
            currentPage * driversPerPage
          )
          .map((driver) => (
            <Card
              key={driver.id}
              id={driver.id}
              name={driver.name}
              lastName={driver.lastName}
              image={driver.image}
              dob={driver.dob}
              nationality={driver.nationality}
              description={driver.description}
              teams={driver.teams}
            />
          ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
