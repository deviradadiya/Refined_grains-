import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import OurProduct from "../Home/OurProduct";

const Shop = () => {
  return (
      <>
          <div className="shop-page">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <Sidebar />
                      </div>

                      <div className={'col-md-9'}>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="section-title pt_42">
                                    <h5>Our Products</h5>
                                    <p>Select Customise, and convert with precision.</p>
                                </div>
                            </div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                            <div className="col-md-4"><OurProduct /></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

      </>
  );
};

export default Shop;
