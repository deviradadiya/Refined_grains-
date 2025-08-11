import React from "react";
import LocationIcon from "../../assets/svg/location.svg";
import PhoneIcon from "../../assets/svg/phone.svg";
import EmailIcon from "../../assets/svg/email.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-banner text-end">
              <h2 className={'fs_48 fw_700 lh-1-5 mb-0 position-relative z-2'}>Contact Us</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-details pt_68">
              <h3 className={'fs_36 fw_700 lh-1 text-color mb_18'}>Let's talk with us</h3>
              <p className={'fs_16 lh-1-5 text-color fw_400 mb_48'}>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>

              <ul className="contact-info">
                <li>
                  <a href="">
                    <img className="img-fluid icon-coffee" src={LocationIcon} alt="Location" />
                    <span>1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</span>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img className="img-fluid" src={PhoneIcon} alt="Phone icon" />
                    <span>+1 234 678 9108 99</span>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img className="img-fluid icon-coffee" src={EmailIcon} alt="email icon" />
                    <span>Contact@moralizer.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <form action="" className={'contact-form'}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className={'form-input'}>
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter Your First name" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={'form-input'}>
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter Your Last name" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={'form-input'}>
                    <label htmlFor="email" className="form-label">E-Mail</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={'form-input'}>
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Your Phone Number" />
                  </div>
                </div>

                <div className="col-12">
                  <h5 className={'pt_14 fs_24 fw_700 lh-1 text-color mb_28'}>Chosse Grinding Texture</h5>

                  <div className="d-flex align-items-center">
                    <div className="form-check custom-radio mr_38">
                      <input className="form-check-input" type="radio" id="fine" checked />
                      <label className="form-check-label" htmlFor="fine">General Inquiry</label>
                    </div>

                    <div className="form-check custom-radio mr_38">
                      <input className="form-check-input" type="radio" id="fine" />
                      <label className="form-check-label" htmlFor="fine">General Inquiry</label>
                    </div>

                    <div className="form-check custom-radio">
                      <input className="form-check-input" type="radio" id="fine" />
                      <label className="form-check-label" htmlFor="fine">General Inquiry</label>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className={'form-input'}>
                    <label htmlFor="email" className="form-label">Message</label>
                    <textarea className={'form-control'} name="" id="" cols="30" rows="8" placeholder={'Write your message..'} />
                  </div>
                </div>

                <div className="col-12">
                  <div className={'text-end'}>
                    <button className={'button btn-solid '}>Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
