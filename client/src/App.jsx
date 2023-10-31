/*styles*/
import "./App.css";
/*hooks*/
import { Routes, Route } from "react-router-dom";
/*components*/
import LandingPage from "./components/landingPage/LandingPage";
import HomePage from "./components/homePage/HomePage";
import DetailPage from "./components/detailPage/DetailPage";
import Nav from "./components/nav/Nav";
import FormPage from "./components/formPage/FormPage";
function App() {
  return (
    <div>
      <Nav />
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
