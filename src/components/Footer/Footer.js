import FacebookIcon from "../../assets/svg/facebook.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import YoutubeIcon from "../../assets/svg/youtube.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={
                "d-flex align-items-lg-center justify-content-between gap-3 top-footer"
              }
            >
              <ul>
                <li>
                  <a href="#" className={"active"}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Customise Wheat</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>

              <div className="social-link">
                <ul>
                  <li>
                    <a href="#">
                      <img className={"img-fluid"} src={FacebookIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className={"img-fluid"} src={TwitterIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className={"img-fluid"} src={InstagramIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className={"img-fluid"} src={YoutubeIcon} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <p>© Refined Grance 2025</p>
              <ul className={"d-flex align-items-center p-0 m-0"}>
                <li>
                  <a href="#">Refund policy</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
