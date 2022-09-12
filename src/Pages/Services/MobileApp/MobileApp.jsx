import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./MobileApp.css";


const MobileApp = () => {
  return (

    <div>
      <Header />
      <section id="MobileApp">
        <div class="hero-MobileApp" data-aos="fade-up">
          <h2>Mobile App</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section id="MobileAppContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="MobileContainText">
              <h2>Mobile And App</h2>
              <p id="MobileContainText">
                The Mobile Apps on your smartphone are products built by development teams that
                worked to create convenient instruments of technology you can use on the go.
                Combining Hybrid and Native Mobile App Development Frameworks, the team(s) at AnoStrat
                are seasoned professionals who apply their experience to develop Mobile Apps using
                from The Best Frameworks for mobile app development to help you every step of the way.
                Let AnoStrat developers’ sharp expertise and practiced experience master your flow of
                business with Mobile Technology…
              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <img
                id="MobileAppImage"
                src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileApp;
