import React, {useState} from "react";
import MyReviews from "./MyReviews";
import MyFavourites from "./MyFavourites";
import {useSearchParams} from "react-router-dom";

const MyStuff = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromURL = searchParams.get('tab') || 'reviews';

  const tabs = [
    { id: 'reviews', label: 'My Reviews'},
    { id: 'favourites', label: 'My Favourites' },
  ];

    const handleTabChange = (tabId) => {
        setSearchParams({ tab: tabId });
    };

  return (
      <>
        <div className="order-page">
          <div className="profile-tabs-button">
            {tabs.map((tab) => (
                <button key={tab.id} className={tabFromURL === tab.id ? 'active' : ''} onClick={() => handleTabChange(tab.id)}>
                  {tab.label}
                </button>
            ))}
          </div>

          <div className="tab-content">
            {tabFromURL === 'reviews' && ( <MyReviews /> )}
            {tabFromURL === 'favourites' && ( <MyFavourites /> )}
          </div>
        </div>

      </>

  );
};

export default MyStuff;
