import React, {useState} from "react";
import orderbox from "../../assets/svg/orderbox.svg";
import grainsuserp from "../../assets/images/grainsusrp .png";
import search from "../../assets/svg/search.svg";
import review from "../../assets/svg/review.svg";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import CardIcon from "../../assets/svg/credit-card.svg";
import UPIIcon from "../../assets/svg/UPI.svg";
import NetBankingIcon from "../../assets/svg/netbanking.svg";
import VisaIcon from "../../assets/svg/Visa.svg";
import Order from "./Order";

const MyOrder = () => {

  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'Orders'},
    { id: 'buy-again', label: 'Buy Again' },
    { id: 'not-at-shipped', label: 'Not Yet Shipped'},
    { id: 'cancelled-order', label: 'Cancelled Orders'},
  ];

  return (
      <>
        <div className="order-page">
          <div className="profile-tabs-button">
            {tabs.map((tab) => (
                <button key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'orders' && (
                <Order />
            )}
          </div>
        </div>

      </>

  );
};

export default MyOrder;
