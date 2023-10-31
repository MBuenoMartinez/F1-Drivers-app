/*styles*/
import "./App.css";
/*hooks*/
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
/*components*/
import LandingPage from "./components/landingPage/LandingPage";
import HomePage from "./components/homePage/HomePage";
import DetailPage from "./components/detailPage/DetailPage";
import Nav from "./components/nav/Nav";
import FormPage from "./components/formPage/FormPage";
import { getAllDrivers, getDriversByName } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  const onSearch = async (name) => {
    try {
      if (name.trim() === "") {
        dispatch(getAllDrivers()); // Llama a getAllDogs si la cadena de búsqueda está vacía
      } else {
        dispatch(getDriversByName(name));
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  };
  // const onSearch = (name) => {
  //   try {
  //     dispatch(getDriversByName(name));
  //   } catch (error) {
  //     throw Error(error.message);
  //   }
  // };
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/drivers" element={<HomePage onSearch={onSearch} />} />
        <Route path="/drivers/:id" element={<DetailPage />} />
        <Route path="/createDriver" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
