import React, {useState} from "react";
import UserCards from "./UserCards";

const UserPayment = () => {

  const [activeTab, setActiveTab] = useState('save-cards');

  const tabs = [
    { id: 'save-cards', label: 'Save Cards'},
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
            {activeTab === 'save-cards' && (
                <UserCards />
            )}
          </div>
        </div>

      </>

  );
};

export default UserPayment;
