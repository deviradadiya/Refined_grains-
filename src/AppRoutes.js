import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About-us/AboutUs";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact us/Contact";
import CustomiseWheat from "./components/Customise-wheat/CustomiseWheat";
import Userprofile from "./components/User-profile/Userprofile";
import AccountSetting from "./components/User-profile/AccountSetting/AccountSetting";
import UsermanageAddress from "./components/User-profile/UsermanageAddress";
import UserCards from "./components/User-profile/UserCards";
import "./assets/scss/style.scss";

function AppLayout() {
  return (
    <div className={"main-section"}>
      <Header />
      <div className={"app-main-section"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/customize-wheat" element={<CustomiseWheat />} />
          <Route path="/user-profile" element={<Userprofile />} />
          <Route path="/account-setting" element={<AccountSetting />} />
          <Route path="/usermanageaddress" element={<UsermanageAddress />} />
          <Route path="/userCards" element={<UserCards />} />
        </Routes>
      </div>

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
