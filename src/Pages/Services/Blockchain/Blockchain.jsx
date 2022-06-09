import React from "react";
import Header from "../../Header/Header";
import './Blockchain.css'

const Blockchain = () => {
  return (
    <div>
      <Header />
      <section id="blockChain">

        <div class="hero-content" data-aos="fade-up">
          <h2>Our Service</h2>
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
              <h2>Blockchain Development:</h2>
              <p id="dollarText">
                We’re specialized in providing almost all the major services of BlockChain.<br />
                We provide end to end solutions to our customers to fulfill their business <br />
                needs which ultimately leads towards a perfect delivery.
                We understand that Blockchain is perhaps best understood as a decentralized ledger that can diminish costs by removing intermediaries
                such as banks and effectively decentralizing trust. The technology appends entries to the ledger which are validated by the wider
                user-community rather than by a central authority
              </p>
            </div>

            <div class="col-lg-6 about-img ">
              <br />
              <img id="dollarImage" src="https://buildmydapp.co/wp-content/uploads/2022/01/illustration-bitcoin-concept_53876-43952.jpg" alt="" height={300} />
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
                <h3>Private Blockchain<br /> Development</h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>Private Blockchain<br /> Development</h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>Private Blockchain<br /> Development</h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
               <div class="count-box">
                <i class="fas fa-user-md"></i>
                <br />
                <br />
                <br />
                <h3>Private Blockchain<br /> Development</h3>
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

    </div>
  );
};

export default Blockchain;
