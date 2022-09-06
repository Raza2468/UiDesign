import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./GarficDesigning.css";

const GarficDesigning = () => {
  return (
    <div>
      <Header />
      <section id="GarficDesigning">
        <div class="hero-GarficDesigning" data-aos="fade-up">
          <h2>Garphic Designing</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <!-- End Contact Section --> */}


      <section id="GraficContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="GraficContainText">
              <h2>Graphic Design: </h2>
              <p id="GraficContainText">
                Who needs Graphic Design Service? According to popular belief, you have have 3 seconds to attract
                your potential audience to stay on your website and possibly interact with your service or product.
                The designers we have on-site know that the 3-Second rule must be applied to their work.
                Following the 3-Second Rule, the Graphic Designers create graphics that instantly captivate website
                visitors or those of your social media pages. If you select our Graphic Design services as a
                complete package of our Digital Marketing Services, you can receive a wholesome deal that increases
                your ROI and generates leads from your digital presence.


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
      
      
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GarficDesigning;
