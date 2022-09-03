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
                We are a professional custom web design/development company.
                Different creatively designed websites can be effectively used
                by the firms to publicize their business. The individuals can
                also launch their portfolios through these websites. Nowadays,
                all the individuals, especially the merchants, aspire to have a
                website of their own to publicize their merchandise.
                <br />
                We will help you to achieve your goals and to grow your
                business. We offer a full range of Web Design Services. Blogs,
                Online Stores, Multimedia Galleries, Search Engine Optimization
                services and more. We specialize in affordable digital marketing
                services for small to medium businesses..
                <br />
                Build My Dapp is dealing with all the major CMS like WordPress,
                Magento, Shopify, Opencart, Joomla & Drupal. We’re also dealing
                with all the major frameworks and specialize in LAMP & MERN
                stack development. We build all kinds of static & dynamic sites
                which full fill the client’s needs.
              </p>
            </div>

            <div class="col-lg-6 about-img ">
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
