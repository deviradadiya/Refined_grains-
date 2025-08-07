import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About-us/AboutUs"
import Banner from "./components/Banner/Banner";
import "./assets/scss/style.scss";


function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Header" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Banner" element={<Banner />} />
              </Routes>
    </Router>
  );
}

export default AppRoutes;