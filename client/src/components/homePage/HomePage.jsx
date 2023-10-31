// import Cards from "../cards/Cards";
// const HomePage = () => {
//   const handleOrder = (event) => {
//     dispatch(orderCards(event.target.value));
//     setAux(true);
//   };
//   const handleFilter = (event) => {
//     dispatch(filterCards(event.target.value));
//   };
//   return (
//     <div>
//       <select onChange={handleOrder}>
//         <option value="Ascendente">Ascendente</option>
//         <option value="Descendente">Descendente</option>
//       </select>
//       <select onChange={handleFilter}>
//         <option value="Teams">Teams</option>
//         <option value="DriversFromApi">Drivers from Api</option>
//         <option value="DriversFromDB">Drivers from DB</option>
//       </select>
//       <Cards />
//     </div>
//   );
// };
// export default HomePage;

import Cards from "../cards/Cards";

const Home = () => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export default Home;
