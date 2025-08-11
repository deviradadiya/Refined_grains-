import React, { useState } from 'react';
import CHeckGreenIcon from "../../assets/svg/check-green.svg";
import InfoIcon from "../../assets/svg/info.svg";
import PaymentSuccessIcon from "../../assets/svg/payment-success.svg";
import ChooseAddOn from "./ChooseAddOn";
import ChooseQuantity from "./ChooseQuatity";
import GrindingTexture from "./GrindingTexture";
import Cart from "./Cart";
import Payment from "./Payment";
import CartProductIcon from "../../assets/images/packaged-delivered.png";

const steps = ['Choose Your Baset Add-on', 'Select Quantity', 'Grinding Texture & Packaging', 'Cart Detail', 'Payment'];

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return (
                <>
                    <ChooseAddOn />
                    {/* Add your content for step 0 here */}
                </>
            );
        case 1:
            return (
                <>
                    <ChooseQuantity />
                    {/* Add your content for step 1 here */}
                </>
            );
        case 2:
            return (
                <>
                    <GrindingTexture />
                    {/* Add your content for step 2 here */}
                </>
            );
        case 3:
            return (
                <>
                    <Cart />
                    {/* Add your content for step 3 here */}
                </>
            );
        case 4:
            return (
                <>
                    <Payment />
                    {/* Add your content for step 4 here */}
                </>
            );
        default:
            return <p>Invalid Step</p>;
    }
};


const CustomiseSidebar = () => {

    const [step, setStep] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);


  return (
    <>
        <div className="col-md-3">
            <div className="stepper-sidebar">
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
            </div>
        </div>

        <div className="col-md-9">
            <div className={'stepper'}>
                <div className={'stepper-content pt_42'}>
                    {isCompleted ? (
                        <div className="completion-screen">
                            <div className="completion-screen-content">
                                <div className="img-wrapper text-center">
                                    <img src={PaymentSuccessIcon} alt="Success" className="success-icon" />
                                </div>
                                <h2 className={'fs_40 fw_700 text-color mb_38 text-center'}>Payment successful!</h2>
                                <div className="complete-content">
                                    <div className={'d-flex mb_42'}>
                                        <div className="img-wrapper">
                                            <img className={'img-fluid'} src={CartProductIcon} alt="cart product"/>
                                        </div>
                                        <div>
                                            <h6 className={'fs_24 fw_700 mb_12'}>Durum wheat (4KG)</h6>
                                            <div className={'tag-grid mb_26'}>
                                                <div className="tag">Rice 1Kg</div>
                                                <div className="tag">Oats 1Kg</div>
                                                <div className="tag">Rajma 1Kg</div>
                                                <div className="tag">Fine</div>
                                                <div className="tag">Regular Paper Bag</div>
                                            </div>
                                            <div className="content">
                                                <div>
                                                    <h5 className={'mb-0 fs_16 fw_500 text-color'}>Transaction Date</h5>
                                                    <h5 className={'mb-0 fs_16 fw_600 text-color'}>Tuesday, 13 June 2023</h5>
                                                </div>

                                                <div>
                                                    <h5 className={'mb-0 fs_16 fw_500 text-color'}>Payment Method</h5>
                                                    <h5 className={'mb-0 fs_16 fw_600 text-color'}>Mastercasrd ending</h5>
                                                </div>

                                                <div>
                                                    <h5 className={'mb-0 fs_16 fw_500 text-color'}>Subtotal</h5>
                                                    <h5 className={'mb-0 fs_16 fw_600 text-color'}>168 ₹</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'text-center'}>
                                        <button className={'fs_16 fw_400 button btn-solid text-uppercase py_20 px_30'}>Track Your Order</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <>
                            {getStepContent(step)}

                            <div className={'stepper-button-content'}>
                                <p className={'fs_20 fw_500 mb-0 mr_32'}>Total QTY: 4KG</p>
                                <p className={'fs_20 fw_500 mb-0 mr_32 d-flex align-items-center mr_28'}>
                                    Sub Total : 168 ₹
                                    <span className={'d-flex ml_14'}>
            <img className={'img-fluid'} src={InfoIcon} alt="Info Icon" />
          </span>
                                </p>
                                <button onClick={() => setStep(step - 1)} disabled={step === 0} className={'button btn-border mr_10'}>Prev</button>
                                <button
                                    onClick={() => {
                                        if (step === steps.length - 1) {
                                            setIsCompleted(true);
                                        } else {
                                            setStep(step + 1);
                                        }
                                    }}
                                    className={'button btn-solid'}
                                >
                                    {step === steps.length - 1 ? 'Pay 168 ₹' : 'NEXT'}
                                </button>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>

    </>

  );
};

export default CustomiseSidebar;
 