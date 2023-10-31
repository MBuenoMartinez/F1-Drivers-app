import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions/actions";
import Card from "../card/Card";
const Cards = () => {
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  const CardsPerPage = 9; // Cantidad de tarjetas por página

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, []);

  // Cálculo de las páginas totales
  const totalPages = Math.ceil(drivers.length / CardsPerPage);

  // Filtrar los conductores a mostrar en la página actual
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

  return (
    <div>
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
            teams={driver.teams ? driver.teams : driver.teams}
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
export default Cards;
