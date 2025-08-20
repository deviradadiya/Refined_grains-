import React from "react";
import backarrow from "../../assets/svg/backearrow.svg";
import disnews from "../../assets/images/disnews.png";
import instablog from "../../assets/svg/instablog.svg";
import linkdinblog from "../../assets/svg/linkdinblog.svg";
import facebookblog from "../../assets/svg/facebookblog.svg";
import twitterblog from "../../assets/svg/twitterblog.svg";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";
import data from "../../assets/images/data.png";
import stratgy from "../../assets/images/stratgy.png";
import cybersecurity from "../../assets/images/cybersecurity.png";
import cloud_card from "../../assets/images/cloud-card.png";
import cybers from "../../assets/images/cybers.png";
import artifical from "../../assets/images/artifical.png";
import dataanalitics from "../../assets/images/dataanalitics.png";
import webdevelopment from "../../assets/images/webdevelopment.png";
const Blogdetails = () => {
  return (
    <div className="blog-container pt_70">
      {/* Back Button */}
      <div>
        <div>
          <a
            href="#"
            className="back-btn d-flex  gap-2 text-decoration-none pb_30 fs_20"
          >
            <img src={backarrow} />
            Back
          </a>
        </div>
        {/* Category */}
        <div className="d-flex justify-content-center ">
          <span className="category-Ai fs_20  fw_700">
            Artificial Intelligence
          </span>
        </div>
        {/* Blog Title */}
        <h1 className="blog-title d-flex  justify-content-center  pt_30 fs_40 fw_700 text-center">
          Harnessing Artificial Intelligence to Revolutionize Workflow <br />
          Automation and Drive Smarter Business Decisions
        </h1>
        {/* Author + Date */}
        <p className="author pt_30 text-center fs_20 fw_500 pb_70">
          Olivia Thompson • Aug 10, 2025
        </p>
        {/* Blog Image */}
        <div className="blog-img ">
          <img src={disnews} alt="AI Blog" />
        </div>
        {/* Blog Content */}

        <div className="blog-sub-content  d-flex gap-2">
          <div className="blog-content ">
            {/* Sidebar */}
            <div class="box">
              <div class="content-box   pl_32">
                <h6 className="fs_15 fw_700 ">
                  Identify Automation Opportunities
                </h6>
                <div class="list-item fs_15 fw_400 pt_42">
                  Integrate Predictive Analytics
                </div>
                <div class="list-item fs_15 pt_42">
                  Personalize Customer Experiences
                </div>
                <div class="list-item fs_15 pt_42">Enhance Decision-Making</div>
                <div class="list-item fs_15 pt_42">
                  Ensure Ethical and Transparent
                </div>
                <div class="list-item fs_15 pt_42 pb_34">
                  Continuous Optimization and Learning
                </div>
              </div>
              <div class="share pt_84 ">
                <p className="fs_20 fw_700">Share Article</p>
                <div class="icons pt_26">
                  <a href="#">
                    <img src={instablog} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={linkdinblog} alt="LinkedIn" />
                  </a>
                  <a href="#">
                    <img src={facebookblog} alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src={twitterblog} alt="X" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main right Article */}
            <div className="right-bar">
              <article className="article  ">
                <p className="pb_62 lh-sm fs_20 fw_400">
                  In today’s fast-paced business environment, artificial
                  intelligence (AI) has evolved from a futuristic concept into a
                  core driver of efficiency and innovation. From automating
                  repetitive processes to enabling data-driven insights, AI is
                  reshaping how organizations operate, make decisions, and
                  deliver value to customers. Here’s how you can leverage AI to
                  transform workflows and empower smarter decision-making.
                </p>
                <h3 className="fs_40 fw_700 pb_30">
                  Identify Automation Opportunities
                </h3>
                <p className=" lh-sm fs_20 fw_400">
                  Begin by mapping out processes that are repetitive,
                  time-consuming, and prone to human error. AI-powered tools can
                  handle these tasks efficiently and free up human capital for
                  more value-driven responsibilities. Identify workflows that
                  stand to gain from automation to save time, reduce costs, and
                  boost operational efficiency.
                </p>
                <h3 className="pt_60 fs_40 fw_700 pt_60">
                  Integrate Predictive Analytics
                </h3>
                <p className="pt_30 lh-sm fs_20 fw_400">
                  AI thrives on data. By integrating predictive analytics into
                  your workflows, you can forecast demand, identify market
                  trends, and detect potential risks before they become
                  problems. These insights allow you to make proactive, informed
                  business decisions that give you a competitive edge.
                </p>
                <h3 className="fs_40 fw_700 pt_60">
                  Personalize Customer Experiences
                </h3>
                <p className="pt_30 lh-sm fs_20 fw_400">
                  AI-driven personalization can tailor marketing messages,
                  product recommendations, and support interactions to each
                  customer’s unique preferences. This improves engagement,
                  increases conversions, and strengthens brand loyalty.
                </p>
                <h3 className="fs_40 fw_700 pt_60">
                  Enhance Decision-Making with Real- <br />
                  Time Insights
                </h3>
                <p className="pt_30 lh-sm fs_20 fw_400">
                  With AI-powered dashboards and reporting tools,
                  decision-makers gain access to real-time metrics and KPIs.
                  This enables quick course corrections and ensures decisions
                  are grounded in accurate, up-to-date information.
                </p>
                <h3 className="fs_40 fw_700 pt_60">
                  Ensure Ethical and Transparent AI Practices
                </h3>
                <p className="pt_30 lh-sm fs_20 fw_400">
                  As you adopt AI, prioritize transparency, fairness, and
                  compliance with regulations. Make sure your AI models are
                  explainable and avoid biased decision-making to maintain trust
                  with customers and stakeholders.
                </p>
                <h3 className="fs_40 fw_700 pt_60">
                  Continuous Optimization and Learning
                </h3>
                <p className="pt_30  lh-sm fs_20 fw_400">
                  AI systems improve over time as they learn from new data.
                  Regularly monitor and refine your AI models to ensure they
                  stay relevant, accurate, and aligned with business objectives.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="pt_100 ">
        <h2 className="fw-bold mb-4 fs_40 fw_700 ">Recommended Articles</h2>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="border-0 pt_50 d-flex overflow-auto  flex-nowrap gap-4">
          {/* CARD 1 */}
          <div className="card " style={{ minWidth: "420px" }}>
            <img src={data} alt="Big Data" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Data Analytics</p>
              <h5 className="card-title fw-bold">
                Unlocking the Power of Big Data: Turning Complex Datasets into
                Actionable Insights for Competiti...
              </h5>
              <p className="text-muted small mt-3">
                Michael Roberts • Aug 04, 2025
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card" style={{ minWidth: "420px" }}>
            <img src={stratgy} alt="IT Strategy" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">IT Strategy</p>
              <h5 className="card-title fw-bold">
                Future–Proofing Your Business IT Infrastructure to Thrive in an
                Ever–Changing Digital Landscape
              </h5>
              <p className="text-muted small mt-3">
                Sarah Williams • Aug 02, 2025
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card " style={{ minWidth: "420px" }}>
            <img src={cybersecurity} alt="Cybersecurity" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Cybersecurity</p>
              <h5 className="card-title fw-bold">
                Strengthening Your Cybersecurity Posture to Defend Against
                Next-Gen Threats
              </h5>
              <p className="text-muted small mt-3">
                David Anderson • Aug 05, 2025
              </p>
            </div>
          </div>

          <div className="card " style={{ minWidth: "420px" }}>
            <img src={cloud_card} alt="Cloud Computing" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Cloud Computing</p>
              <h5 className="card-title fw-bold">
                Maximizing Scalability and Security Through Hybrid Cloud
                Architecture in 2025
              </h5>
              <p className="text-muted small mt-3">
                Mark Johnson • Aug 09, 2025
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card shadow-sm" style={{ minWidth: "420px" }}>
            <img src={cybers} alt="Zero Trust Security" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Cybersecurity</p>
              <h5 className="card-title fw-bold">
                Implementing Zero Trust Security to Protect Your Business from
                Evolving Cyber Threats
              </h5>
              <p className="text-muted small mt-3">
                Laura Mitchell • Aug 07, 2025
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card shadow-sm" style={{ minWidth: "420px" }}>
            <img src={artifical} alt="AI" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Artificial Intelligence</p>
              <h5 className="card-title fw-bold">
                Using AI–Driven Analytics to Gain Competitive Insights and
                Improve Decision–Making
              </h5>
              <p className="text-muted small mt-3">
                William Parker • Aug 05, 2025
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="card shadow-sm" style={{ minWidth: "420px" }}>
            <img src={dataanalitics} alt="Data First" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Data Analytics</p>
              <h5 className="card-title fw-bold">
                Building a Data–First Culture to Unlock Insights and Drive
                Business Growth
              </h5>
              <p className="text-muted small mt-3">
                Emma Richardson • Aug 03, 2025
              </p>
            </div>
          </div>
          {/* Card 8 */}
          <div className="card shadow-sm" style={{ minWidth: "420px" }}>
            <img src={webdevelopment} alt="Headless CMS" />
            <div className="card-body">
              <p className="fw-bold text-muted mb-2">Web Development</p>
              <h5 className="card-title fw-bold">
                Adopting Headless CMS for Faster, More Flexible Digital
                Experiences
              </h5>
              <p className="text-muted small mt-3">
                Daniel Cooper • Aug 01, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="get-in-touch-wrapper">
        <div className="customize-container pt_110">
          <div className={"customize-your-wheat get-in-touch pt_10"}>
            <div className="customize-box">
              <h2 className={"fs_40 text-white fw_700 mb_20"}>
                Get in Touch With Us
              </h2>
              <p className={"fs_20 fw_400 text-white mb_30 lh-1-5"}>
                Have a question, need help with your order, or want to learn
                more about our wholesome flour customization? We’re here to
                help! Reach out to us anytime — whether it’s through a quick
                message, call, or email. Our friendly support team will get back
                to you as soon as possible.
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
    </div>
  );
};

export default Blogdetails;
