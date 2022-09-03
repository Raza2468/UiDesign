import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Game.css";

const Game = () => {
  return (
    <div>
      <Header />
      <section id="game">
        <div class="hero-content" data-aos="fade-up">
          <h2>Game Development</h2>
        </div>
      </section>
      <br />
      <h1>Game Development</h1>
      <br />
      <br />

      <section id="gameCount" class="gameCount">
        <div class="elementor-background-overla">
          {/* <div class="row"> */}
          {/* <section id="services" class="services"> */}
          {/* <div class="container"> */}

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="">Magni Dolores</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-world"></i>
                </div>
                <h4>
                  <a href="">Nemo Enim</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-slideshow"></i>
                </div>
                <h4>
                  <a href="">Dele cardo</a>
                </h4>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">Divera don</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">Divera don</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">Divera don</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">Divera don</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
        {/* </div> */}
        {/* </div> */}
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Game;
