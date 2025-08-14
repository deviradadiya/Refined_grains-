import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About-us/AboutUs";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact us/Contact";
import CustomiseWheat from "./components/Customise-wheat/CustomiseWheat";
import AccountSetting from "./components/User-profile/AccountSetting/AccountSetting";
import ProfileSidebar from "./components/User-profile/ProfileSidebar";
import MyOrder from "./components/User-profile/Order/MyOrder";
import UserPayment from "./components/User-profile/Payment/UserPayment";
import MyStuff from "./components/User-profile/MyStuff/MyStuff";

import "./assets/scss/style.scss";


function AppContent() {
    const location = useLocation();
    const profileRoutes = ["/my-order", "/account-setting", "/payment", "/my-stuff"];
    const isProfileRoute = profileRoutes.includes(location.pathname);

    return isProfileRoute ? (
        <div className="main-section">
            <Header />
            <div className="app-main-section">
                <div className="user-profile-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <ProfileSidebar />
                            </div>
                            <div className="col-lg-8">
                                <div className="pt_74 profile-content">
                                    <Routes>
                                        <Route path="/my-order" element={<MyOrder />} />
                                        <Route path="/account-setting" element={<AccountSetting />} />
                                        <Route path="/payment" element={<UserPayment />} />
                                        <Route path="/my-stuff" element={<MyStuff />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        <div className="main-section">
            <Header />
            <div className="app-main-section">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/customize-wheat" element={<CustomiseWheat />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

function AppRoutes() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default AppRoutes;
