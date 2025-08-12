import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import OurProduct from "../Home/OurProduct";
import FilterIcon from "../../assets/svg/filter.svg";

const Shop = () => {
  return (
      <>
          <div className="shop-page">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <Sidebar />

                          <div className="shop-filter d-md-nonr">
                              <button className={'button btn-solid'}>Sort
                                  <img className={'img-fluid'} src={FilterIcon} alt=""/>
                              </button>

                              <div className={'d-flex align-items-center flex-wrap'}>
                                  <div className="form-check custom-radio mr_22">
                                      <input className="form-check-input" type="radio" id="yes" checked />
                                      <label className="form-check-label" htmlFor="yes">Show All Products</label>
                                  </div>
                                  <div className="form-check custom-radio">
                                      <input className="form-check-input" type="radio" id="yes" />
                                      <label className="form-check-label" htmlFor="yes">Show In-Stock Products</label>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className={'col-md-9'}>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="section-title pt_42">
                                    <h5>Our Products</h5>
                                    <p>Select Customise, and convert with precision.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                            <div className="col-xl-4 col-md-6"><OurProduct /></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

      </>
  );
};

export default Shop;
