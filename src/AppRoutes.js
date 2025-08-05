
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import Header from "./components/Header/Header";


function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
              <Route path="/verify" element={<Verify />} />
             <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;