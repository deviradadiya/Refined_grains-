import React from "react";
import CardIcon from "../../../assets/svg/cardlogo.svg";

const UserCards = () => {
  return (
    <>
      <div className="main-content">
        <div className="user-card-grid">
          <div className="user-card d-flex align-items-start justify-content-between gap-2">
            <div className={'d-flex align-items-start'}>
              <div className="form-check custom-radio mr_10">
                <input className="form-check-input" type="radio" id="fine" checked />
              </div>
              <div>
                <h5 className={'fs_16 fw_400 text-black mb_12'}>Credit Card</h5>
                <p className={'fs_14 fw_400 mb-0'}>****8523</p>
              </div>
            </div>
            <div className={'d-flex align-items-center'}>
              <h6 className={'fs_16 fw_400 mr_12 text-decoration-underline mb_0'}>Edit</h6>
              <img className={'img-fluid'} src={CardIcon} alt=""/>
            </div>
          </div>
          <div className="user-card d-flex align-items-start justify-content-between gap-2">
            <div className={'d-flex align-items-start'}>
              <div className="form-check custom-radio mr_10">
                <input className="form-check-input" type="radio" id="fine" checked />
              </div>
              <div>
                <h5 className={'fs_16 fw_400 text-black mb_12'}>Credit Card</h5>
                <p className={'fs_14 fw_400 mb-0'}>****8523</p>
              </div>
            </div>
            <div className={'d-flex align-items-center'}>
              <h6 className={'fs_16 fw_400 mr_12 text-decoration-underline mb_0'}>Edit</h6>
              <img className={'img-fluid'} src={CardIcon} alt=""/>
            </div>
          </div>
          <button className={'add-new'}>+ Add New Card</button>
        </div>
      </div>
    </>
  );
};

export default UserCards;
