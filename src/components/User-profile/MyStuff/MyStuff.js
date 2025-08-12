import React, {useState} from "react";
import MyReviews from "./MyReviews";
import MyFavourites from "./MyFavourites";

const MyStuff = () => {

  const [activeTab, setActiveTab] = useState('reviews');

  const tabs = [
    { id: 'reviews', label: 'My Reviews'},
    { id: 'favourites', label: 'My Favourites' },
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
            {activeTab === 'reviews' && (
                <MyReviews />
            )}
            {activeTab === 'favourites' && (
                <MyFavourites />
            )}
          </div>
        </div>

      </>

  );
};

export default MyStuff;
