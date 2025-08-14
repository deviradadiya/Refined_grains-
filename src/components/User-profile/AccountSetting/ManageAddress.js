import React from "react";
import DeleteIcon from "../../../assets/svg/deletebtn.svg";
import EditIcon from "../../../assets/svg/editbtn.svg";
const ManageAddress = () => {
  return (
    <>
      <div className="main-content">
        <div>
          <h3 className="fs_16 pb_28 mb-0 text-black fw_500">
            Default Address
          </h3>
        </div>

        <div className="address-list">
          <div className="list-grid d-flex justify-content-between align-items-start">
            <div className={'d-flex align-items-start'}>
              <div className="form-check custom-radio mr_10">
                <input className="form-check-input" type="radio" id="fine" checked />
              </div>
              <div>
                <div className={'d-flex align-items-center gap-3 mb_8'}>
                  <h5 className={'fs_16 fw_400 text-color'}>Rahul</h5>
                  <span className={'tag fs_12 fw_500 lh-1'}>Home</span>
                </div>

                <p className={'fs_14 fw_400 lh-1 text-color mb_12'}>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                <p className={'fs_14 fw_400 lh-1 text-color mb_12'}>Mobile : <span className={'fw_700'}> (406) 555-0120</span></p>
                <ul className={'pl_24'}>
                  <li className={'text-color fs_14 fw_400'}>Pay on Delivery availabe </li>
                </ul>
              </div>
            </div>
            <div className={'d-flex align-items-center action-icon'}>
              <div className={'text-black fs_14 fw_500 text-uppercase mr_28 text-no-wrap'}>
                <img className={'img-fluid mr_10'} src={DeleteIcon} alt="delete icon"/>
                Remove</div>

              <div className={'text-black fs_14 fw_500 text-uppercase text-no-wrap'}>
                <img className={'img-fluid mr_10'} src={EditIcon} alt="delete icon"/>
                Edit</div>
            </div>
          </div>

          <div className="list-grid d-flex justify-content-between align-items-start">
            <div className={'d-flex align-items-start'}>
              <div className="form-check custom-radio mr_10">
                <input className="form-check-input" type="radio" id="fine" checked />
              </div>
              <div>
                <div className={'d-flex align-items-center gap-3 mb_8'}>
                  <h5 className={'fs_16 fw_400 text-color'}>Rahul</h5>
                  <span className={'tag fs_12 fw_500 lh-1'}>Office</span>
                </div>

                <p className={'fs_14 fw_400 lh-1 text-color mb_12'}>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                <p className={'fs_14 fw_400 lh-1 text-color mb_12'}>Mobile : <span className={'fw_700'}> (406) 555-0120</span></p>
                <ul className={'pl_24'}>
                  <li className={'text-color fs_14 fw_400'}>Pay on Delivery availabe </li>
                </ul>
              </div>
            </div>
            <div className={'d-flex align-items-center action-icon'}>
              <div className={'text-black fs_14 fw_500 text-uppercase mr_28 text-no-wrap'}>
                <img className={'img-fluid mr_10'} src={DeleteIcon} alt="delete icon"/>
                Remove</div>

              <div className={'text-black fs_14 fw_500 text-uppercase text-no-wrap'}>
                <img className={'img-fluid mr_10'} src={EditIcon} alt="delete icon"/>
                Edit</div>
            </div>
          </div>

          <button className={'add-new'}>+ Add New Address</button>
        </div>
      </div>
    </>
  );
};

export default ManageAddress;
