import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import "./assets/scss/style.scss";

function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;