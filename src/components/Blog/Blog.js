import React from "react";
import disnews from "../../assets/images/disnews.png";
import cloud from "../../assets/images/cloud.png";
import cyber from "../../assets/images/cyber.png";
import development from "../../assets/images/development.png";
import data from "../../assets/images/data.png";
import stratgy from "../../assets/images/stratgy.png";
import cybersecurity from "../../assets/images/cybersecurity.png";
import cloud_card from "../../assets/images/cloud-card.png";
import cybers from "../../assets/images/cybers.png";
import artifical from "../../assets/images/artifical.png";
import dataanalitics from "../../assets/images/dataanalitics.png";
import webdevelopment from "../../assets/images/webdevelopment.png";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";

const Blog = () => {
  return (
    <div>
      <section className="news-section">
        <h1 className="mb_30 fs_40 fw_700">Discover Our latest News</h1>
        <div className="news-container">
          {/* Left Main News */}
          <div className="main-news ">
            <img src={disnews} alt="AI" />
            <div className="main-news-content pt_40  fw_600">
              <h3 className="fs_20 fw_600">Artificial Intelligence</h3>
              <h2 className="main-news-para fs_24 fw_700 pt_30">
                Harnessing Artificial Intelligence to Revolutionize Workflow
                Automation and Drive Smarter Business Decisions
              </h2>
              <p className="pt_30 fs_20">Olivia Thompson • Aug 10, 2025</p>
            </div>
          </div>
          {/* Right Side News */}
          <div className="side-news">
            <div className="news-card">
              <img src={cloud} alt="Cloud" />
              <div className="news-card-content pl_24">
                <h5 className="fw_600 fs_16 pt_8 ">Cloud Computing</h5>
                <h4 className="fs_16 fw_700 pt_30">
                  Cloud Transformation Roadmap: <br /> How Businesses Can
                  Achieve
                  <br />
                  Scalability, Security, and Cost E...
                </h4>
                <p className="fs_14 fw_400 pt_30">
                  James Carter <span className="fw-bold"> • </span>Aug 12, 2025
                </p>
              </div>
            </div>

            <div className="news-card">
              <img src={cyber} alt="Cybersecurity" />
              <div className="news-card-content pl_24">
                <h5 className="fw_600 fs_16 pt_8 ">Cybersecurity</h5>
                <h4 className="fs_16 fw_700 pt_30">
                  Building a Resilient Cybersecurity Framework to Protect Your
                  <br />
                  Organization from Advanced Thr...
                </h4>
                <p className="fs_14 fw_400 pt_30">
                  Daniel Smith <span className="fw-bold"> • </span> Aug 08, 2025
                </p>
              </div>
            </div>
            <div className="news-card">
              <img src={development} alt="Web Development" />
              <div className="news-card-content pl_24">
                <h5 className="fw_600 fs_16 pt_8">Web Development</h5>
                <h4 className="fs_16 fw_700 pt_30">
                  From Monolithic to Microservices: Modern Web Development{" "}
                  <br />
                  Strategies for High-Performance...
                </h4>
                <p className="fs_14 fw_400 pt_30">
                  Emily Johnson <span className="fw-bold"> • </span> Aug 06,
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt_100">
        {/* Heading */}
        <div className="">
          <h2 className="page-title   text-center fw_700   fs_40">
            Insights, Innovations, and IT Trends That <br /> Power the Future
          </h2>
          {/* Grid Section */}
          <div className="grid pt_50">
            {/* Card 1 */}
            <div className="card ">
              <img src={data} alt="Big Data" />
              <div className="card-details">
                <p className="category pt_24  fw_600 fs_16 pb_30">
                  Data Analytics
                </p>
                <h3 className="fw_700  fs_24 pb_30">
                  Unlocking the Power of Big Data: Turning Complex Datasets into
                  Actionable Insights for Competiti...
                </h3>
                <p className="author ">Michael Roberts • Aug 04, 2025</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card">
              <img src={stratgy} alt="IT Strategy" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                IT Strategy
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Future–Proofing Your Business IT Infrastructure to Thrive in an
                Ever–Changing Digital Landscape
              </h3>
              <p className="author">Sarah Williams • Aug 02, 2025</p>
            </div>
            {/* Card 3 */}
            <div className="card">
              <img src={cybersecurity} alt="Cybersecurity" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Cybersecurity
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Strengthening Your Cybersecurity Posture to Defend Against
                Next-Generation Threats
              </h3>
              <p className="author">David Anderson • Aug 05, 2025</p>
            </div>
            {/* Card 4 */}
            <div className="card pb_50">
              <img src={cloud_card} alt="Cloud Computing" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Cloud Computing
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Maximizing Scalability and Security Through Hybrid Cloud
                Architecture in 2025
              </h3>
              <p className="author">Mark Johnson • Aug 09, 2025</p>
            </div>
            {/* Card 5 */}
            <div className="card">
              <img src={cybers} alt="Zero Trust Security" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Cybersecurity
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Implementing Zero Trust Security to Protect Your Business from
                Evolving Cyber Threats
              </h3>
              <p className="author">Laura Mitchell • Aug 07, 2025</p>
            </div>
            {/* Card 6 */}
            <div className="card">
              <img src={artifical} alt="AI" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Artificial Intelligence
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Using AI–Driven Analytics to Gain Competitive Insights and
                Improve Decision–Making
              </h3>
              <p className="author">William Parker • Aug 05, 2025</p>
            </div>
            {/* Card 7 */}
            <div className="card">
              <img src={dataanalitics} alt="Data First" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Data Analytics
              </p>
              <h3 className="fw_700 pb_30 fs_24 ">
                Building a Data–First Culture to Unlock Insights and Drive
                Business Growth
              </h3>
              <p className="author ">Emma Richardson • Aug 03, 2025</p>
            </div>
            {/* Card 8 */}
            <div className="card">
              <img src={webdevelopment} alt="Headless CMS" />
              <p className="category  pt_24 pr-7 fw_600 fs_16 pb_30">
                Web Development
              </p>
              <h3 className="fw_700  fs_24 pb_30">
                Adopting Headless CMS for Faster, More Flexible Digital
                Experiences
              </h3>
              <p className="author">Daniel Cooper • Aug 01, 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt_110">
        <div className={"customize-your-wheat get-in-touch pt_10"}>
          <div className="customize-box">
            <h2 className={"fs_40 text-white fw_700 mb_20"}>
              Get in Touch With Us
            </h2>
            <p className={"fs_20 fw_400 text-white mb_30 lh-1-5"}>
              Have a question, need help with your order, or want to learn more
              about our wholesome flour customization? We’re here to help! Reach
              out to us anytime — whether it’s through a quick message, call, or
              email. Our friendly support team will get back to you as soon as
              possible.
            </p>
            <a
              href="#"
              className={
                "d-inline-block text-white fs_20 text-uppercase fw_500 d-flex align-items-center text-decoration-underline"
              }
            >
              Contact us
              <img
                className={"img-fluid ml_12"}
                src={ArrowRightIcon}
                alt="Arrow Right White"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
