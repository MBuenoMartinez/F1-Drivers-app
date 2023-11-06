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

  // Estado local para el seguimiento de la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de elementos por página
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getAllTeams());
  }, []);

  const handleOrder = (event) => {
    const { value } = event.target;
    dispatch(orderDrivers(value));
  };

  const handleFilter = (event) => {
    const { value } = event.target;
    dispatch(filterDrivers(value));
  };

  // Función para cambiar de página
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Calcular el número total de páginas
  const totalPages = Math.ceil(drivers.length / itemsPerPage);

  // Calcular el rango de botones de paginación para mostrar un total de 10 botones
  let startPage = Math.max(1, currentPage - 4);
  let endPage = Math.min(totalPages, startPage + 9);

  if (endPage - startPage < 9) {
    startPage = Math.max(1, endPage - 9);
  }

  // Generar una lista de botones de paginación
  const paginationButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => (
      <button
        key={startPage + index}
        onClick={() => goToPage(startPage + index)}
        className={currentPage === startPage + index ? styles.activePage : ""}
      >
        {startPage + index}
      </button>
    )
  );

  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <label>Order by: </label>
        <select onChange={handleOrder}>
          <option value="AlfabeticamenteAscendente">
            Alfabeticamente Ascendente
          </option>

          <option value="AlfabeticamenteDescendente">
            Alfabeticamente Descendente
          </option>

          <option value="YearOfBirthAscendente">
            Year of birth Ascendente
          </option>

          <option value="YearOfBirthDescendente">
            Year of birth Descendente
          </option>
        </select>
        <label>Filter by: </label>
        <select onChange={handleFilter}>
          <option value="AllDrivers">All Drivers</option>
          <option value="DriversFromApi">Drivers from Api</option>
          <option value="DriversFromDB">Drivers from DB</option>
        </select>
        <label>Teams: </label>
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
        {/* Lógica para mostrar los elementos de la página actual */}
        {drivers
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
          Anterior
        </button>
        {paginationButtons}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
