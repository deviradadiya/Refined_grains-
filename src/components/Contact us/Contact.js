import React from "react";

import location from "../../assets/svg/location.svg";
import phone from "../../assets/svg/phone.svg";
import email from "../../assets/svg/email.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="customize-row row">
          <div className="cusomize-col col-12">
            <div className="customize-Contact">
              <div className="customize-box">
                <h2 className={"fs_40 text-white fw_700 mb_20 pt_74"}>
                  Contact Us
                </h2>
              </div>
            </div>
          </div>

          {/* Left Column */}

          <div className="customize-your-talk col-md-4">
            <div className="left-col p-3">
              <h3 className="fw-bold mb-3 fs_36 pt_68">Let's talk with us</h3>
              <p className="text-muted mb-4 fs_16 pt_18 lh-1-5">
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </p>
              <ul className="list-unstyled contact-info">
                <li className="location-icon pt_48 d-flex align-items-start">
                  <a href="#" className="pr_10 ">
                    <img
                      className="img-fluid icon-coffee"
                      src={location}
                      alt="Location"
                    />
                  </a>
                  <span>
                    1055 Arthur ave Elk Groot, 67.
                    <br />
                    New Palmas South Carolina.
                  </span>
                </li>
                <li className="pt_38">
                  <a href="#" className="pr_10">
                    <img className={"img-fluid"} src={phone} alt="" />
                  </a>
                  +1 234 678 9108 99
                </li>
                <li className="pt_38">
                  <a href="#" className="pr_10">
                    <img className={"img-fluid"} src={email} alt="" />
                  </a>
                  Contact@moralizer.com
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}

          <div className="customize-your-form col-md-8">
            <div className="right-col">
              <form className="customize-form pt_68">
                <div className="customize-form-row row pb_38 ">
                  <div className="customize-form-filed col">
                    <label className="pb_8 fs_20">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="customize-form-filed col">
                    <label className="pb_8 fs_20">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="customize-form-row row pb_38">
                  <div className="customize-form-filed col">
                    <label className="pb_8 fs_20">E-Mail</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="jimepib332@ofacer.com"
                    />
                  </div>
                  <div className="customize-form-filed col">
                    <label className="pb_8 fs_20">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                </div>

                <div className="customize-your-texture mb-3">
                  <label className="fw-bold fs-5 d-block mb-2 pb_28">
                    Choose Grinding Texture
                  </label>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label fs-6" htmlFor="texture2">
                      General Inquiry
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="texture"
                      id="texture2"
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label fs-6" htmlFor="texture2">
                      General Inquiry
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="texture"
                      id="texture2"
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label fs-6" htmlFor="texture2">
                      General Inquiry
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="texture"
                      id="texture2"
                    />
                  </div>
                </div>

                <div className="customize-your-textarea mb-3">
                  <label className="fs_16 pb_8">Message</label>
                  <textarea
                    className="form-control fs_14"
                    rows="4"
                    placeholder="Write your message."
                  />
                </div>

                <div className="customize-button d-flex justify-content-end pt-3">
                  <button type="submit" className="submit-btn ">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
