/*styles*/
import "./App.css";
/*hooks*/
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
/*components*/
import LandingPage from "./components/landingPage/LandingPage";
import HomePage from "./components/homePage/HomePage";
import DetailPage from "./components/detailPage/DetailPage";
import Nav from "./components/nav/Nav";
import FormPage from "./components/formPage/FormPage";
import { getAllDrivers, getDriversByName } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const onSearch = (name) => {
    try {
      if (name.trim() === "") dispatch(getAllDrivers());

      dispatch(getDriversByName(name));
    } catch (error) {
      throw Error(error.message);
    }
  };

  return (
    <div>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : ""}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/drivers" element={<HomePage />} />
        <Route path="/drivers/:id" element={<DetailPage />} />
        <Route path="/createDriver" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
