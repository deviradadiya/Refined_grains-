import React, {useState} from "react";
import Order from "../Order/Order";
import ProfileInformation from "./ProfileInformation";
import ManageAddress from "./ManageAddress";

const AccountSetting = () => {

  const [activeTab, setActiveTab] = useState('profile-info');

  const tabs = [
    { id: 'profile-info', label: 'profile Information'},
    { id: 'manage-address', label: 'Manage Address'},
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
            {activeTab === 'profile-info' && (
                <ProfileInformation />
            )}
            {activeTab === 'manage-address' && (
                <ManageAddress />
            )}
          </div>
        </div>

      </>

  );
};

export default AccountSetting;
