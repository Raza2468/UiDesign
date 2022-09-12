import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  return (

    <div>
      <Header />
      <section id="DigitalMarketing">
        <div class="hero-DigitalMarketing" data-aos="fade-up">
          <h2>Digital Marketing</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />


      {/* <!-- End Contact Section --> */}
      <section id="DigitalContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="DigitalContainText">
              <h2>Digital Marketing</h2>
              <p id="DigitalContainText">
                Marketing your services or products using social networks is a contemporary method
                to reach your prospective customers. Through certified individuals conducting extensive
                research, applying unparalleled expertise and practicing extraordinary effort, the team
                at AnoStrat will provide increased ROI (Return-On-Investment) and High Volumes of 
                Turnover for Your Business.

              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <img
                id="DigitalAppImage"
                src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DigitalMarketing;
