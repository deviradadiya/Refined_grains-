import React, { useState } from 'react';
import CardIcon from "../../assets/svg/credit-card.svg";
import UPIIcon from "../../assets/svg/UPI.svg";
import NetBankingIcon from "../../assets/svg/netbanking.svg";
import VisaIcon from "../../assets/svg/Visa.svg";

const PaymentDetails = () => {

    const [activeTab, setActiveTab] = useState('credit-card');

    const tabs = [
        { id: 'credit-card', label: 'Credit/Debit Card', img: CardIcon, content: 'This is content for Tab 1.' },
        { id: 'upi', label: 'UPI', img: UPIIcon, content: 'This is content for Tab 2.' },
        { id: 'net-banking', label: 'Net banking', img: NetBankingIcon, content: 'This is content for Tab 3.' },
        { id: 'visa-card', label: '', img: VisaIcon, content: 'This is content for Tab 3.' },
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
                {activeTab === 'credit-card' && (
                    <div>
                        <div className="row justify-content-between g-4">
                            <div className="col-md-6">
                                <div className={'form-input'}>
                                    <label htmlFor="inputPassword2" className="form-label">Cardholder's name</label>
                                    <input type="text" className="form-control" id="inputPassword2" placeholder="john" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className={'form-input'}>
                                    <label htmlFor="inputPassword2" className="form-label">Card number</label>
                                    <input type="text" className="form-control" id="inputPassword2" placeholder="Seen on your card" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className={'form-input'}>
                                    <label htmlFor="inputPassword2" className="form-label">Expirity</label>
                                    <input type="text" className="form-control" id="inputPassword2" placeholder="20/23" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className={'form-input'}>
                                    <label htmlFor="inputPassword2" className="form-label">CVC</label>
                                    <input type="text" className="form-control" id="inputPassword2" placeholder="654" />
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === 'upi' && (
                    <div>
                        <h3>Enter UPI ID</h3>
                        <input type="text" placeholder="example@upi" />
                    </div>
                )}

                {activeTab === 'net-banking' && (
                    <div>
                        <h3>Select Your Bank</h3>
                        <select>
                            <option value="">Select Bank</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="sbi">SBI</option>
                            <option value="icici">ICICI Bank</option>
                        </select>
                    </div>
                )}

                {activeTab === 'visa-card' && (
                    <div>
                        <h3>Enter Visa Details</h3>
                        <input type="text" placeholder="Visa Card Number" />
                        <input type="text" placeholder="Name" />
                        <input type="password" placeholder="Security Code" />
                    </div>
                )}
            </div>
        </div>
    </>

  );
};

export default PaymentDetails;
 