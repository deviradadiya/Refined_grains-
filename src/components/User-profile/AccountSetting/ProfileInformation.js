import React from "react";

const ProfileInformation = () => {
  return (
      <>
        <div className="main-content">
          <div className="row g-4">
            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Name <span className={'required'}>*</span></label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="Thomas W. Holmes" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Mobile No <span className={'required'}>*</span></label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="000-000-0000" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Pin code <span className={'required'}>*</span></label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="35624" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">location <span className={'required'}>*</span></label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="Syracuse" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Address (Area and Street) <span className={'required'}>*</span></label>
                <textarea className={'form-control'} name="" id="" cols="30" rows="8" placeholder={'2118 Thornridge Cir. Syracuse, Connecticut 35624'} />
              </div>
            </div>

            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">City/District/Town <span className={'required'}>*</span></label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="Syracuse" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">State <span className={'required'}>*</span></label>
                <select className={'form-control'} name="" id="">
                  <option value="">Connecticut</option>
                  <option value="">Connecticut</option>
                  <option value="">Connecticut</option>
                  <option value="">Connecticut</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Landmark (Optional)</label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className={'form-input'}>
                <label htmlFor="inputPassword2" className="form-label text-uppercase">Alternate Phone (Optional)</label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="" />
              </div>
            </div>

            <div className="col-12">
              <div className={'d-flex align-items-center justify-content-end'}>
                <button className={'button btn-border'}>Cancel</button>
                <button className={'button btn-solid'}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default ProfileInformation;
