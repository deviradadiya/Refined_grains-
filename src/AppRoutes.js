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
import AboutUs from "./components/About-us/AboutUs";
import "./assets/scss/style.scss";
import Contact from "./components/Contact us/Contact";

function AppLayout() {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                 <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />

        </div>
    );
}

function AppRoutes() {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
}

export default AppRoutes;