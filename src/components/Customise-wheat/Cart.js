import React from 'react';
import CartProductIcon from "../../assets/images/packaged-delivered.png";
import EditIcon from "../../assets/svg/edit.svg";
import PlusIcon from "../../assets/svg/plus.svg";
import DeleteIcon from "../../assets/svg/delete.svg";


const Cart = () => {



  return (
      <div>
          <div className="section-title">
              <h5>Your Cart</h5>
              <p>Review Your order</p>
          </div>

          <div className={'content-box'}>
              <div className="cart-list">
                  <div className="cart-grid d-flex align-items-lg-center justify-content-between gap-2">
                      <div className={'d-flex align-items-center'}>
                          <div className="img-wrapper">
                              <img className={'img-fluid'} src={CartProductIcon} alt="cart product"/>
                          </div>
                          <div>
                              <div className={'d-flex align-items-end gap-2 mb_10 cart-title'}>
                                  <h6 className={'fs_24 fw_700 text-color mb-0'}>MH Durum wheat (4KG)</h6>
                                  <p className={'fs_14 fw_500 text-color mb-0'}>Exc Delivery Date: 1 July, 2025</p>
                              </div>
                              <div className={'tag-list d-flex align-items-center'}>
                                  <div className="tag py_10 px_10 fs_12 text-color">Rice 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Oats 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Rajma 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Fine</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Regular Paper Bag</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Regular Paper Bag</div>
                              </div>
                          </div>
                      </div>

                      <div className={'d-flex align-items-center gap-2 cart-total'}>
                          <p className={'fs_20 fw_700 text-black'}>₹ 168</p>

                          <div className={'d-flex align-items-center gap-3'}>
                              <div className={'action d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={EditIcon} alt="edit icon"/>
                              </div>

                              <div className={'action d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={PlusIcon} alt="add icon"/>
                              </div>

                              <div className={'delete d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={DeleteIcon} alt="edit icon"/>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="cart-grid d-flex align-items-lg-center justify-content-between gap-2">
                      <div className={'d-flex align-items-start '}>
                          <div className="img-wrapper">
                              <img className={'img-fluid'} src={CartProductIcon} alt="cart product"/>
                          </div>
                          <div>
                              <div className={'d-flex align-items-end gap-2 mb_10 cart-title'}>
                                  <h6 className={'fs_24 fw_700 text-color mb-0'}>MH Durum wheat (4KG)</h6>
                                  <p className={'fs_14 fw_500 text-color mb-0'}>Exc Delivery Date: 1 July, 2025</p>
                              </div>
                              <div className={'tag-list d-flex align-items-center'}>
                                  <div className="tag py_10 px_10 fs_12 text-color">Rice 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Oats 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Rajma 1Kg</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Fine</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Regular Paper Bag</div>
                                  <div className="tag py_10 px_10 fs_12 text-color">Regular Paper Bag</div>
                              </div>
                          </div>
                      </div>

                      <div className={'d-flex align-items-center gap-2 cart-total'}>
                          <p className={'fs_20 fw_700 text-black'}>₹ 168</p>

                          <div className={'d-flex align-items-center gap-3'}>
                              <div className={'action d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={EditIcon} alt="edit icon"/>
                              </div>

                              <div className={'action d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={PlusIcon} alt="add icon"/>
                              </div>

                              <div className={'delete d-flex align-items-center justify-content-center'}>
                                  <img className={'img-fluid'} src={DeleteIcon} alt="edit icon"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
};

export default Cart;
 