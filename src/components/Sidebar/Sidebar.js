import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import FilterIcon from "../../assets/svg/filter.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar navbar-expand-xl">
        <button
            className="navbar-toggler button btn-solid"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          Sort
          <img className={'img-fluid'} src={FilterIcon} alt=""/>
        </button>
        <div className="sidebar-content collapse navbar-collapse" id="sidebarNav">
          <div>
            <h6 className={'fw_16 fw_600 mb_18 text-color'}>Wheat Type</h6>

            <div className={'d-flex flex-column checkbox-list mb_48'}>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="sharbati-wheat" />
                <label className="form-check-label" htmlFor="sharbati-wheat">Sharbati Wheat</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="lokwan-wheat" />
                <label className="form-check-label" htmlFor="lokwan-wheat">Lokwan Wheat</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="mp-wheat" />
                <label className="form-check-label" htmlFor="mp-wheat">MP Wheat</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="organic-wheat" />
                <label className="form-check-label" htmlFor="organic-wheat">Organic Wheat</label>
              </div>
            </div>
          </div>

          <div>
            <h6 className={'fw_16 fw_600 mb_18 text-color'}>Whole Wheat Flour</h6>

            <div className={'d-flex flex-column checkbox-list mb_48'}>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="multigrain-flour" />
                <label className="form-check-label" htmlFor="multigrain-flour">Multigrain Flour</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="gluten-flour" />
                <label className="form-check-label" htmlFor="gluten-flour">Gluten-Free Flour</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="add-on-mix" />
                <label className="form-check-label" htmlFor="add-on-mix">Atta + Add-on Mix</label>
              </div>
            </div>
          </div>

          <div>
            <h6 className={'fw_16 fw_600 mb_18 text-color'}>Packaging Size</h6>

            <div className={'d-flex flex-column checkbox-list mb_48'}>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="1-kg" />
                <label className="form-check-label" htmlFor="1-kg">1 Kg</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="5-kg" />
                <label className="form-check-label" htmlFor="5-kg">5 Kg</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="10-kg" />
                <label className="form-check-label" htmlFor="10-kg">10 Kg</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="15-kg" />
                <label className="form-check-label" htmlFor="15-kg">15 Kg</label>
              </div>
            </div>
          </div>

          <div>
            <h6 className={'fw_16 fw_600 mb_18 text-color'}>States</h6>

            <div className={'d-flex flex-column checkbox-list mb_48'}>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="madhya-pradesh" />
                <label className="form-check-label" htmlFor="madhya-pradesh">Madhya Pradesh</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="maharashtra" />
                <label className="form-check-label" htmlFor="maharashtra">Maharashtra</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="rajasthan" />
                <label className="form-check-label" htmlFor="rajasthan">Rajasthan</label>
              </div>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="uttar-pradesh" />
                <label className="form-check-label" htmlFor="uttar-pradesh">Uttar Pradesh</label>
              </div>
            </div>
          </div>

          <div>
            <h6 className={'fw_16 fw_600 mb_18 text-color'}>Price Range</h6>
            <div className={'d-flex flex-column checkbox-list mb_48'}>
              <div className="form-check custom-checkbox">
                <input className="form-check-input" type="checkbox" value="" id="madhya-pradesh" />
                <label className="form-check-label" htmlFor="madhya-pradesh">Madhya Pradesh</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default Sidebar;
 