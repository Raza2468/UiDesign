import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Blockchain.css";

const Blockchain = () => {
  return (
    <div>
      <Header />
      <section id="blockChain">
        <div class="hero-content" data-aos="fade-up">
          <h2>BLOCKCHAIN</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section id="blockChainImage">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <h2>BLOCKCHAIN</h2>
              <p id="dollarText">
                The world has changed. Web 3.0 is set to affect Your Business.
                AnoStrat builds dAPPS (Decentralized Apps) that prepare your company for
                The Evolution of The Internet as we know it. Seamlessly applying DeFi Protocols
                (Decentralized Finance Protocols) to enhance traceability and secure the details
                of Your Business Transactions, AnoStrat Fortifies all of the Clients that select us.
              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <img
                id="dollarImage"
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

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" class="counts">
        <div class="elementor-background-overla">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>
                  Private Blockchain
                  <br /> Development
                </h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>
                  Private Blockchain
                  <br /> Development
                </h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>
                  Private Blockchain
                  <br /> Development
                </h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>
                  Private Blockchain
                  <br /> Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- End Counts Section --> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blockchain;
