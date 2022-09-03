import React, { useState, useEffect } from "react";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import "./Home.css";
import MovingComponent from "react-moving-text";
import HomeSlider from "../Images/HomeSlider.jpeg";
import axios from "axios";
// https://yidaoj.github.io/react-moving-text/example

const Home = () => {
  const AnimationsForChaining = ["jelly"];
  const AnimationsForChainingHeading = ["fadeInFromLeft"];

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);
  const [animationTypeTypeHeading, setAnimationTypeHeading] = useState(
    AnimationsForChainingHeading[0]
  );

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
    setAnimationTypeHeading(animationIndex + 1);
  };

  return (
    <div>
      <Header />

      <main>
        <section
          id="hero"
          class="d-flex align-items-center"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + HomeSlider})`,
          }}
        >
          <div class="carousel-container">
            <div class="carousel-content">
              <h2 class="animate__animated animate__fadeInDown">
                <span>Driving Success</span>{" "}
              </h2>
              {/* <MovingComponent
                onAnimationEnd={handleChainAnimation}
                type={animationTypeTypeHeading}
                duration="1000ms"
                timing="linear"
                fillMode="forwards"
                iteration={1}>

              </MovingComponent> */}

              <MovingComponent
                onAnimationEnd={handleChainAnimation}
                type={animationType}
                duration="1000ms"
                timing="linear"
                fillMode="forwards"
                iteration={1}
              >
                {/* <p class="animate__animated animate__fadeInUp p-2">What does your company need to be successful? Equipping themselves with the Latest Technology, to Perform Exceptionally. Let AnoStrat build your Technological Masterstroke.</p> */}
              </MovingComponent>
              <div>
                {/* <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a> */}
              </div>
            </div>
          </div>
        </section>
      </main>

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
                options for your specific needs.
              </p>
            </div>

            <div class="col-lg-6 about-img ">
              <img
                id="dollarImage"
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
