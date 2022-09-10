import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./TailoredSoftware.css";

const TailoredSoftware = () => {

  return (

    <div>
      <Header />
      <section id="Tailored">
        <div class="hero-Tailored" data-aos="fade-up">
          <h2>Containt Wraitting</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- End Contact Section --> */}




      <section id="TailoredContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="TailoredContainText">
              <h2>Containt Wraitting</h2>
              <p id="TailoredContainText">
              Optimal functions of Your Business are vital to validate that it is operating as desired. AnoStrat helps build technological functions that assist your company in producing Optimal Results. Upon assignment, we provide you with the contact details of our software development manager and all you have to do is reach out to them for your software needs. 

              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <img
                id="TailoredImage"
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

export default TailoredSoftware;
