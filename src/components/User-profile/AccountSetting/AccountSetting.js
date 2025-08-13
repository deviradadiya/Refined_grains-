import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";
import ManageAddress from "./ManageAddress";

const AccountSetting = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromURL = searchParams.get('tab') || 'profile-info';

    const tabs = [
        { id: 'profile-info', label: 'Profile Information' },
        { id: 'manage-address', label: 'Manage Address' },
    ];

    // Whenever tab changes, update the URL
    const handleTabChange = (tabId) => {
        setSearchParams({ tab: tabId });
    };

    return (
        <div className="order-page">
            <div className="profile-tabs-button">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={tabFromURL === tab.id ? 'active' : ''}
                        onClick={() => handleTabChange(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabFromURL === 'profile-info' && <ProfileInformation />}
                {tabFromURL === 'manage-address' && <ManageAddress />}
            </div>
        </div>
    );
};

export default AccountSetting;
