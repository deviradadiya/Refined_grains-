import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import "./assets/scss/style.scss";

function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/home" element={<Home />} />
          <Route path="/Header" element={<Header />}
              <Route path="/verify" element={<Verify />} />
             <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;