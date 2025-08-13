import React from 'react';


const ChooseQuantity = () => {



  return (
      <div>
          <div className="section-title chose-quantity">
              <h5>Choose Your Baset Quantity</h5>
              <p>Select from Quantity to start your custom flour mix.</p>
          </div>

          <div className={'content-box'}>
              <div className="choose-your-grid">
                  <div className="grid-box">
                      <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                          <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>whaet (1)</h5>
                      </div>

                      <div className={'dropdown-list'}>
                          <div className={'list-box'}>
                              <div className={'d-flex align-items-center justify-content-between gap-2 mb_10'}>
                                  <p className={'fs_16 mb-0 fw_400 text-color '}>MH Durum wheat</p>
                                  <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 20 ₹</p>
                              </div>

                              <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button"
                                          id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                          aria-expanded="false">
                                      1KG
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>1KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>5KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>10KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>15KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>20KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>25KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>30KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>

                                      <li className={'other-quantity'}>
                                          <input type="text" className={'form-control'} placeholder={'Add Qty'} />
                                          <h6 className={'fs_12 fw_700 mb-0'}>Other Quantity</h6>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="grid-box">
                      <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                          <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>grains (2</h5>
                      </div>

                      <div className={'dropdown-list'}>
                          <div className={'list-box'}>
                              <div className={'d-flex align-items-center justify-content-between gap-2 mb_10'}>
                                  <p className={'fs_16 mb-0 fw_400 text-color '}>Rice</p>
                                  <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 55 ₹</p>
                              </div>
                              <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button"
                                          id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                          aria-expanded="false">
                                      1KG
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>1KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>5KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>10KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>15KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>20KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>25KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>30KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className={'list-box'}>
                              <div className={'d-flex align-items-center justify-content-between gap-2 mb_10'}>
                                  <p className={'fs_16 mb-0 fw_400 text-color '}>Oats</p>
                                  <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 65 ₹</p>
                              </div>
                              <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button"
                                          id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                          aria-expanded="false">
                                      1KG
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>1KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>5KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>10KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>15KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>20KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>25KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>30KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="grid-box">
                      <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                          <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>Pulses (2)</h5>
                      </div>

                      <div className={'dropdown-list'}>
                          <div className={'list-box'}>
                              <div className={'d-flex align-items-center justify-content-between gap-2 mb_10'}>
                                  <p className={'fs_16 mb-0 fw_400 text-color '}>Masoor dal</p>
                                  <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 32 ₹</p>
                              </div>
                              <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button"
                                          id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                          aria-expanded="false">
                                      1KG
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>1KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>5KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>10KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>15KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>20KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>25KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a className="dropdown-item" href="#">
                                              <p className={''}>30KG</p>
                                              <div className="form-check custom-checkbox">
                                                  <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  );
};

export default ChooseQuantity;
 