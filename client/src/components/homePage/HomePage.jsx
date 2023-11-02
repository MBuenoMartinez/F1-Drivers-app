import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDrivers,
  getAllTeams,
  filterDrivers,
  orderDrivers,
} from "../../redux/actions/actions";

import Card from "../card/Card";

const Home = () => {
  const drivers = useSelector((state) => state.drivers);
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const CardsPerPage = 9; //Cantidad de tarjetas por página

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getAllTeams());
  }, []);

  // Cálculo de las páginas totales
  const totalPages = Math.ceil(drivers.length / CardsPerPage);

  //Filtrar los conductores a mostrar en la página actual
  const displayedDrivers = drivers.slice(
    (currentPage - 1) * CardsPerPage,
    currentPage * CardsPerPage
  );

  // Manejar cambios de página
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleOrder = (event) => {
    const { value } = event.target;
    dispatch(orderDrivers(value));
  };
  const handleFilter = (event) => {
    const { value } = event.target;
    dispatch(filterDrivers(value));
  };
  return (
    <div>
      <div>
        <label>Order by:</label>
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
        <label>Filter by:</label>
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
      <div>
        {displayedDrivers.map((driver) => (
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

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previus Page
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
