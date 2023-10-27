/*styles*/
import "./App.css";
/*hooks*/
import { Routes, Route } from "react-router-dom";
/*components*/
import LandingPage from "./components/landingPage/LandingPage";
import HomePage from "./components/homePage/HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
        {/* <Route path="" element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
