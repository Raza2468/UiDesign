import React, { useEffect, useRef } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";
import HomeSlider from "../Images/HomeSlider.jpeg";
import HomeIMage from "../Images/image.png";
// import axios from "axios";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["We Feel Your Determination"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      // smartBackspace: true,
      // loop: true,
      // showCursor: true,
      cursorChar: "",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Header />

      {/* <main> */}
      <section
        id="hero"
        class="d-flex align-items-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + HomeSlider})`,
        }}
      >
        <div class="carousel">
          <div class="carousel-content">
            <h3
              class="animate__animated animate__fadeInDown"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <span id="weKnow">We Know</span> <br /> */}
              <span ref={el}></span>
            </h3>

            <div></div>
          </div>
        </div>
      </section>
      {/* </main> */}

      {/* Cards */}

      <section id="why-us" class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-lg- d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-xl-3 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img
                        src="https://global-uploads.webflow.com/629e4fe96456f848f903e7ef/62acf6ff4578755fbdd55e61_near-protocol-near-logo.png"
                        height={160}
                      />
                      <br />
                      <span>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="far fa-star"> </i>
                      </span>
                      <h4 class="text-warning">100+ Reviews</h4>
                    </div>
                  </div>
                  <div class="col-xl-3 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img
                        src="https://global-uploads.webflow.com/629e4fe96456f848f903e7ef/62acf6ff4578755fbdd55e61_near-protocol-near-logo.png"
                        height={160}
                      />
                      <br />
                      <span>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="far fa-star"> </i>
                      </span>
                      <h4 class="text-warning">100+ Reviews</h4>
                    </div>
                  </div>
                  <div class="col-xl-3 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img
                        src="https://global-uploads.webflow.com/629e4fe96456f848f903e7ef/62acf6ff4578755fbdd55e61_near-protocol-near-logo.png"
                        height={160}
                      />
                      <br />
                      <span>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="far fa-star"> </i>
                      </span>
                      <h4 class="text-warning">100+ Reviews</h4>
                    </div>
                  </div>
                  <div class="col-xl-3 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img
                        src="https://global-uploads.webflow.com/629e4fe96456f848f903e7ef/62acf6ff4578755fbdd55e61_near-protocol-near-logo.png"
                        height={160}
                      />
                      <br />
                      <span>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="fas fa-star"> </i>
                        <i class="far fa-star"> </i>
                      </span>
                      <h4 class="text-warning">100+ Reviews</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Why Us Section --> */}

      <br />
      <br />
      <br />

      {/* <!-- ======= About Section ======= --> */}
      <section id="homeAbout">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <h2>How does AnoStrat work?</h2>
              <p id="dollarText">
                AnoStrat creates advanced solutions that produce scalable
                instruments of tremendous architecture. Direct communications
                with our development team empowers you to select tailored
                options for your specific needs. We have developed proprietary
                apps that will assist you in conducting daily business
                proceedings.
              </p>
            </div>

            <div class="col-lg-6">
              <img
                id="dollarImage"
                // src={HomeIMage}
                src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/05/02030257/dApp-on-NEAR-Protocol.png"
                alt=""
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />
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

export default Home;
