import React, { useState } from 'react';
import CardIcon from "../../assets/svg/credit-card.svg";
import UPIIcon from "../../assets/svg/UPI.svg";
import NetBankingIcon from "../../assets/svg/netbanking.svg";
import VisaIcon from "../../assets/svg/Visa.svg";

const PaymentDetails = () => {

    const [activeTab, setActiveTab] = useState('credit-card');

    const tabs = [
        { id: 'credit-card', label: 'Credit/Debit Card', img: CardIcon },
        { id: 'upi', label: 'UPI', img: UPIIcon },
        { id: 'net-banking', label: 'Net banking', img: NetBankingIcon},
        { id: 'visa-card', label: '', img: VisaIcon },
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
                        <div className={'form-input'}>
                            <label htmlFor="inputPassword2" className="form-label">UPI</label>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Enter  your UPI" />
                        </div>
                    </div>
                )}

                {activeTab === 'net-banking' && (
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

                {activeTab === 'visa-card' && (
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
            </div>
        </div>
    </>

  );
};

export default PaymentDetails;
 