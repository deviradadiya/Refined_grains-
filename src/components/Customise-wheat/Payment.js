import React from 'react';
import PaymentDetails from "./PaymentDetails";


const Payment = () => {



  return (
      <div>
          <div className="section-title pb_22">
              <h5>Complete registration payment</h5>
          </div>

          <div className={'content-box'}>
              <div className="personal-details">
                  <div>
                      <h5 className={'fs_24 fw_700 lh-2 mb_28'}>Personal details</h5>
                      <div className="row g-4">
                          <div className="col-lg-6">
                              <div className={'form-input'}>
                                  <label htmlFor="inputPassword2" className="form-label">Address line</label>
                                  <input type="text" className="form-control" id="inputPassword2" placeholder="Apt. 493 Samual Alley, North Jesusberg, " />
                              </div>
                          </div>

                          <div className="col-lg-6">
                              <div className={'form-input'}>
                                  <label htmlFor="inputPassword2" className="form-label">City</label>
                                  <input type="text" className="form-control" id="inputPassword2" placeholder="Arusha" />
                              </div>
                          </div>

                          <div className="col-lg-6">
                              <div className={'form-input'}>
                                  <label htmlFor="inputPassword2" className="form-label">Postal code</label>
                                  <input type="text" className="form-control" id="inputPassword2" placeholder="0606" />
                              </div>
                          </div>

                          <div className="col-lg-6">
                              <div className={'form-input'}>
                                  <label htmlFor="inputPassword2" className="form-label">State</label>
                                  <input type="text" className="form-control" id="inputPassword2" placeholder="Arusha, Tanzania" />
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <h5 className={'fs_24 fw_600 lh-1 mb_20 mt_38'}>Will your Billing and Shipping address same?</h5>
                      <div className={'d-flex align-items-center '}>
                          <div className="form-check custom-radio mr_38">
                              <input className="form-check-input" type="radio" id="yes" />
                              <label className="form-check-label" htmlFor="yes">Yes</label>
                          </div>
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="no" />
                              <label className="form-check-label" htmlFor="no">No</label>
                          </div>
                      </div>
                  </div>

                  <div className={'mt_38'}>
                      <h5 className={'fs_24 fw_700 lh-2 mb_18'}>Payment methods</h5>

                      <PaymentDetails />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Payment;
 