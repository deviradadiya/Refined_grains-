import React, { useState } from 'react';
import CardIcon from "../../assets/svg/credit-card.svg";

const PaymentDetails = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Credit/Debit Card', img: CardIcon, content: 'This is content for Tab 1.' },
        { id: 'tab2', label: 'Tab 2', content: 'This is content for Tab 2.' },
        { id: 'tab3', label: 'Tab 3', content: 'This is content for Tab 3.' },
    ];


  return (
    <>
        <div className="tabs-container">
            <div className="tab-buttons">
                {tabs.map((tab) => (
                    <button key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <img className={'img-fluid'} src={tab.img} alt=""/>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <div key={tab.id}>
                                <p>{tab.content}</p>
                            </div>
                        )
                )}
            </div>
        </div>
    </>

  );
};

export default PaymentDetails;
 