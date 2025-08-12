import React, {useState} from "react";
import Order from "../Order/Order";
// import ByAgain from "./ByAgain";
// import NotShipped from "./NotShipped";
// import CancelOrder from "./CancelOrder";

const AccountSetting = () => {

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
            {/*{activeTab === 'buy-again' && (*/}
            {/*    <ByAgain />*/}
            {/*)}*/}
            {/*{activeTab === 'not-at-shipped' && (*/}
            {/*    <NotShipped />*/}
            {/*)}*/}
            {/*{activeTab === 'cancelled-order' && (*/}
            {/*    <CancelOrder />*/}
            {/*)}*/}
          </div>
        </div>

      </>

  );
};

export default AccountSetting;
