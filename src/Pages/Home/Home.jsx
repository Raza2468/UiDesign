import React from "react";
import Header from "./Header/Header";
import './Home.css'


const Home = () => {


  return (
    <div>
      <Header />

      <main>
        <section id="hero" class="d-flex align-items-center">
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
                      <img src="https://buildmydapp.co/wp-content/uploads/2022/02/proud-winner-ceo-magazine.png" height={160} />

                      <span >
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
                      <img src="https://buildmydapp.co/wp-content/uploads/2022/02/proud-winner-ceo-magazine.png" height={160} />

                      <span >
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
                      <img src="https://buildmydapp.co/wp-content/uploads/2022/02/proud-winner-ceo-magazine.png" height={160} />

                      <span >
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
                      <img src="https://buildmydapp.co/wp-content/uploads/2022/02/proud-winner-ceo-magazine.png" height={160} />

                      <span >
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
              <h2 >How Does Blockchain Work?</h2>
              <p id="dollarText">
                Blockchain is a procedure for recording data that makes it troublesome or difficult to change, hack, or cheat the framework.
                <br />
                A blockchain is basically a computerized record of exchanges that is copied and dispersed across the whole organization of PC frameworks on the blockchain. Each square in the chain contains various exchanges, and each time another exchange happens on the blockchain, a record of that exchange is added to each member’s record.
                The decentralized data set oversaw by different members is known as Distributed Ledger Technology (DLT).
                <br />
                Blockchain is a kind of DLT where exchanges are recorded with a permanent cryptographic mark called a hash. .
              </p>
            </div>

            <div class="col-lg-6 about-img ">
              <img id="dollarImage" src="https://buildmydapp.co/wp-content/uploads/2021/12/business-g4c28e0d67_1280.jpg" alt="" height={300} />
            </div>

          </div>
        </div>
      </section>

      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>


  );
};

export default Home;
