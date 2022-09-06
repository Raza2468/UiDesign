import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./webAndMobile.css";

const WebAndMobile = () => {
  return (
    <div>
      <Header />
      <section id="web">
        <div class="hero-content" data-aos="fade-up">
          <h2>
            Web & Mobile <br /> Development
          </h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="webabout">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <br />
              <br />
              <br />
              <br />
              <h2>Web Development:</h2>
              <p id="dollarText">
                Web Development aiss the entire cluster of work that is required to produce a website. <br />
                Businesses host a website on the WWW (Worldwide web) so it prominently displays their
                identity to its visitors. The Web Development Team at AnoStrat works with you to
                construct an elegant identity for Your Business on The Web. With our Web Development
                teams using technologies like MERN Stack, MEAN Stack, HTML, CSS, Your Business website
                will be a modern representation of Your Business online.

              </p>
            </div>

            <div class="col-lg-6 ">
              <br />
              <br />
              <br />
              <img
                id="dollarImage"
                src="https://i.pinimg.com/originals/0c/e2/c1/0ce2c15497073dde03f7206c24b7de9d.png"
                alt=""
                height={550}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="webabout2">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 about-img ">
              <br />
              <br />
              <br />
              <img
                id="dollarImage"
                src="https://banner2.cleanpng.com/20180224/tae/kisspng-mobile-app-application-software-computer-terminal-creative-technology-5a912dc2536413.0892955715194638743416.jpg"
                alt=""
                width={550}
                height={550}
              />
            </div>
            <div class="col-lg-6 content" id="dollarText">
              <br />
              <br />

              <h2>Web Development:</h2>
              <p id="dollarText">
                We offer a full range of mobile application design &
                development, integration and management services. Whether it is
                a consumer oriented app or a transformative enterprise-class
                solution, the company leads the entire mobile app development
                process from ideation and concept to delivery, and to ongoing
                ongoing support.
              </p>
              <br />
              <ul>
                <li>Custom iOS and Android apps development</li>
                <li>Native and cross-platform solutions</li>
                <li>Second platform app development</li>
                <li>UI/UX design</li>
                <li>Consulting and prototyping</li>
                <li>Automated QA and testing</li>
                <li>Power management, notification and geofencing</li>
                <li>Embedded Android & AOSP customizations</li>
                <li>Maintenance and post-warranty support</li>
              </ul>
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

export default WebAndMobile;
