import React, { useState } from 'react';
import CHeckGreenIcon from "../../assets/svg/check-green.svg";
import InfoIcon from "../../assets/svg/info.svg";
import CartProductIcon from "../../assets/images/packaged-delivered.png";
import EditIcon from "../../assets/svg/edit.svg";
import PlusIcon from "../../assets/svg/plus.svg";
import DeleteIcon from "../../assets/svg/delete.svg";
import PaymentDetails from "./PaymentDetails";

const steps = ['Choose Your Baset Add-on', 'Select Quantity', 'Grinding Texture & Packaging', 'Cart Detail', 'Payment'];

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return (
                <>
                    <div>
                        <div className="section-title">
                            <h5>Choose Your Baset Quantity</h5>
                            <p>Select from our premium grains to start your custom flour mix.</p>
                        </div>

                        <div className={'content-box'}>
                            <div className="choose-your-grid">
                                <div className="grid-box">
                                    <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                                        <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>whaet (1)</h5>
                                        <a href={'#'} className={'fs_16 fw_700 text-decoration-underline text-primary-color'}>Edit</a>
                                    </div>

                                    <div className={'checkbox-lis'}>
                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                                                <label className="form-check-label" htmlFor="lokwan-wheat">MH Lokwan Wheat</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 20 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="dhrum-wheat" />
                                                <label className="form-check-label" htmlFor="dhrum-wheat">MH Durum wheat</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 18 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="organic-wheat" />
                                                <label className="form-check-label" htmlFor="organic-wheat">MH Organic Wheat</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 30 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="blank-wheat" />
                                                <label className="form-check-label" htmlFor="blank-wheat" />
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 41 ₹</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-box">
                                    <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                                        <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>grains (2)</h5>
                                        <a href={'#'} className={'fs_16 fw_700 text-decoration-underline text-primary-color'}>Edit</a>
                                    </div>

                                    <div className={'checkbox-lis'}>
                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="millet" />
                                                <label className="form-check-label" htmlFor="millet">Millet</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 64 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="rice" />
                                                <label className="form-check-label" htmlFor="rice">Rice</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 55 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="maize" />
                                                <label className="form-check-label" htmlFor="maize">Maize</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 30 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="oats" />
                                                <label className="form-check-label" htmlFor="oats" > Oats </label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 65 ₹</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-box">
                                    <div className={'d-flex align-items-center justify-content-between gap-2 mb_20'}>
                                        <h5 className={'fs_24 fw_700 lh-1 mb-0 text-capitalize'}>Pulses (1)</h5>
                                        <a href={'#'} className={'fs_16 fw_700 text-decoration-underline text-primary-color'}>Edit</a>
                                    </div>

                                    <div className={'checkbox-lis'}>
                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="masoor-dal" />
                                                <label className="form-check-label" htmlFor="masoor-dal">Masoor dal</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 32 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="toor-dal" />
                                                <label className="form-check-label" htmlFor="toor-dal">Toor dal</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 76 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="rajma" />
                                                <label className="form-check-label" htmlFor="rajma">Rajma</label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 80 ₹</p>
                                        </div>

                                        <div className={'d-flex align-items-center justify-content-between gap-2 check-box-div'}>
                                            <div className="form-check custom-checkbox">
                                                <input className="form-check-input" type="checkbox" value="" id="cowpeas" />
                                                <label className="form-check-label" htmlFor="cowpeas" >Cowpeas </label>
                                            </div>
                                            <p className={'fs_12 fw_500 mb-0 text-colors'}>1KG 99 ₹</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add your content for step 0 here */}
                </>
            );
        case 1:
            return (
                <>
                    <div>
                        <div className="section-title">
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
                    {/* Add your content for step 1 here */}
                </>
            );
        case 2:
            return (
                <>
                    <div>
                        <div className="section-title">
                            <h5>Select Grinding Texture</h5>
                            <p>Select from our Grinding Texture to start your custom flour mix.</p>
                        </div>

                        <div className={'content-box'}>
                            <div className="choose-your-grinding">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className={'fs_24 fw_700 lh-2 mb_20 title'}>Chose Grinding Texture</h5>
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
                                        <h5 className={'fs_24 fw_700 lh-2 mb_20 mt-5 text-color'}>choose Packaging </h5>
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
                    {/* Add your content for step 2 here */}
                </>
            );
        case 3:
            return (
                <>
                    <div>
                        <div className="section-title">
                            <h5>Your Cart</h5>
                            <p>Review Your ouder</p>
                        </div>

                        <div className={'content-box'}>
                            <div className="cart-list">
                                <div className="cart-grid d-flex align-items-center justify-content-between gap-2">
                                    <div className={'d-flex align-items-center'}>
                                        <div className="img-wrapper">
                                            <img className={'img-fluid'} src={CartProductIcon} alt="cart product"/>
                                        </div>
                                        <div>
                                            <div className={'d-flex align-items-end gap-2 mb_10'}>
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

                                    <div className={'d-flex align-items-center gap-2'}>
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
                    {/* Add your content for step 3 here */}
                </>
            );
        case 4:
            return (
                <>
                    <div>
                        <div className="section-title mb_42">
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
                    {/* Add your content for step 4 here */}
                </>
            );
        default:
            return <p>Invalid Step</p>;
    }
};


const CustomiseSidebar = () => {

    const [step, setStep] = useState(0);


  return (
    <>
        <div className={'stepper'}>
            <div className={'sidebar-step'}>
                {steps.map((label, index) => (
                    <div key={index} className={`step-sidebar ${index < step ? 'completed' : ''} ${index === step ? 'active' : ''}`}>
                        <div className={'sidebar-content'}>
                            <div className={'step-count'}>
                                {index + 1}
                            </div>
                            <span>{label}</span>
                        </div>
                        <div className={'check-box-icon'}>
                            <img className={'img-fluid'} src={CHeckGreenIcon} alt="check icon"/>
                        </div>
                  </div>
                ))}
            </div>

            <div className={'stepper-content'}>
                {getStepContent(step)}


                <div className={'stepper-button-content'}>
                    <p className={'fs_20 fw_500 mb-0 mr_32'}>Total QTY: 4KG</p>
                    <p className={'fs_20 fw_500 mb-0 mr_32 d-flex align-items-center mr_28'}>Sub Total : 168 ₹
                        <span className={'d-flex ml_14'}> <img className={'img-fluid'} src={InfoIcon} alt="Info Icon"/></span>
                    </p>
                    <button onClick={() => setStep(step - 1)} disabled={step === 0} className={'button btn-border mr_10'}>Prev</button>
                    <button onClick={() => setStep(step + 1)} disabled={step === steps.length - 1} className={'button btn-solid'}>NEXT</button>
                </div>

            </div>
        </div>
    </>

  );
};

export default CustomiseSidebar;
 