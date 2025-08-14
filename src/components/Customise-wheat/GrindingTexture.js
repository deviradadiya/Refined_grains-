import React from 'react';


const GrindingTexture = () => {



  return (
      <div>
          <div className="section-title">
              <h5>Select Grinding Texture</h5>
              <p>Select from our Grinding Texture to start your custom flour mix.</p>
          </div>

          <div className={'content-box'}>
              <div className="choose-your-grinding">
                  <div className="row">
                      <div className="col-12">
                          <h5 className={'fs_24 fw_700 lh-2 mb_20 title text-capitalize'}>Chose Grinding Texture</h5>
                      </div>
                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="fine" />
                              <label className="form-check-label" htmlFor="fine">Fine</label>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="Medium" />
                              <label className="form-check-label" htmlFor="Medium">Medium</label>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="Medium" />
                              <label className="form-check-label" htmlFor="Medium">Coarse</label>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <h5 className={'fs_24 fw_700 lh-2 mb_20 mt-xl-5 text-color text-capitalize'}>choose Packaging </h5>
                      </div>
                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="fine" />
                              <label className="form-check-label" htmlFor="fine">Regular Paper Bag</label>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="Medium" />
                              <label className="form-check-label" htmlFor="Medium">Airtight Zip Pouch</label>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="form-check custom-radio">
                              <input className="form-check-input" type="radio" id="Medium" />
                              <label className="form-check-label" htmlFor="Medium">Eco-friendly Cloth</label>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
};

export default GrindingTexture;
 